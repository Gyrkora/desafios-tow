"use strict";

import { questionsGr } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UIgeo, btnSgte } from "./models/UI.js";


const quizGram = new Quiz(questionsGr);
const uiGram = new UIgeo();

let siguientePregunta = () => {
  quizGram.addIndex();
  printGram(quizGram, uiGram);
};

const printGram = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().question);
    ui.showAnwerGram(quiz.getQuestionIndex().answer);

    console.log(quiz.getIndex());

    btnSgte.removeEventListener('click', siguientePregunta)
    btnSgte.addEventListener("click", siguientePregunta);

    btnSgte.innerText = "sgte";

  }
};

printGram(quizGram, uiGram);






