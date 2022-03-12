/* --------------- en proceso --------------- */

"use strict";

import { dataPron } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UIgeo } from "./models/UI.js";

/* --------------- Aplicando la API --------------- */

/* Variables */
const sentence = document.querySelector(".sentence");
const activateBtn = document.querySelector(".btn_activate");
const deactivateBtn = document.querySelector(".btn_deactivate");

/* --------------- Agregando la API --------------- */

//agregando la API de SpeechRecognition
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

//declarando la variable para la API
const recognition = new SpeechRecognition();
recognition.interimResults = true; // Real Time Result = esto es para que cuando se hable, se escriba de inmediato
recognition.lang = 'es'
console.log(recognition)
/* --------------- Aplicando la API --------------- */

let talking = document.createElement("p");

const quizPron = new Quiz(dataPron);
const uiPron = new UIgeo();

let siguientePregunta = () => {
    quizPron.addIndex();
    printPron(quizPron, uiPron);
  };
  


const printPron = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().sentence);
    console.log(quiz.getIndex());

    // "catching" lo que se está hablando
    recognition.addEventListener("result", (e) => {
      sentence.appendChild(talking);
      const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      talking.innerText = text;
      if (e.results[0].isFinal) {
        talking.innerText = text;
        // talking.classList.add("asking");

        if (text === quiz.getQuestionIndex().sentence ) {
            siguientePregunta()
            talking.innerHTML = ''
        } else {
            console.log('no son iguales');
        }
      }
    });
  }
};

printPron(quizPron, uiPron);

/* --------------- Activar-Desactivar API --------------- */

activateBtn.addEventListener("click", () => {
  recognition.start();
});

deactivateBtn.addEventListener("click", () => {
  recognition.stop();
  talking.innerHTML = "";
});

/* https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/vision-api-how-to-topics/call-read-api


https://developers.google.com/search/docs/advanced/crawling/apis-user-agent
https://developer.mozilla.org/es/docs/Web/API/Web_Speech_API


https://codelabs.developers.google.com/codelabs/cloud-text-speech-python3#0

*/
