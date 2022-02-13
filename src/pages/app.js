
import { Quiz } from "./models/Quiz.js";
import { UIgeo } from "./models/UI.js";
import { questionsGe, questionsGr } from "./data/questions.js";


alert('¿Eres de Latinoamérica o el Caribe? Vamos a ver cuánto sabes de tus raíces con tan sólo 3 preguntas')
let firstName = prompt('¿Cómo te llamas?');

/* --------------- Escribiendo en el DOM Geo-MultipleChoice --------------- */

const printPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.showScores(quiz.score);
    } else {
        console.log( firstName + ', tu puntaje es: ' + quiz.score);
        ui.showQuestion(quiz.getQuestionIndex().question); //questions.[0].question
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => { 
          quiz.guess(currentChoice); //question.[0].choices
          printPage(quiz, ui);
        });
      }

    };

    function main() {
      const quiz = new Quiz(questionsGe);
      const ui = new UIgeo();
      // geografia.innerHTML = "";
    
      printPage(quiz, ui);
    }
    



 

    main();


 


    // const geografia = document.getElementById('geografia')
    
    // const todo = document.getElementById('todos')

    // geografia.addEventListener('click', main)
    