
import { Quiz } from "./models/Quiz.js";
import { UIgeo } from "./models/UI.js";
import { questionsGe } from "./data/questions.js";




/* --------------- Escribiendo en el DOM Geo-MultipleChoice --------------- */

const printPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.showScores(quiz.score);
    } else {
        console.log('tu puntaje es: ' + quiz.score);
        ui.showQuestion(quiz.getQuestionIndex().question); //questions.[0].question
        ui.showChoices(quiz.getQuestionIndex().choices, (electedChoice) => { 
          quiz.guess(electedChoice); //question.[0].choices
          printPage(quiz, ui);
        });
      }

    };

    function main() {
      const quiz = new Quiz(questionsGe);
      const ui = new UIgeo();
    
      printPage(quiz, ui);
    }
    
 
    main();


 


    // const geografia = document.getElementById('geografia')
    
    // const todo = document.getElementById('todos')

    // geografia.addEventListener('click', main)
    