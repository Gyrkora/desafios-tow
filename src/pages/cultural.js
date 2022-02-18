
import { Quiz } from "./models/Quiz.js";
import { UIgeo } from "./models/UI.js";
import { questionsGe, questionsCult } from "./data/questions.js";




/* --------------- Escribiendo en el DOM Geo-MultipleChoice --------------- */

const printPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.showScores(quiz.score);
    } else {
        console.log(quiz.score);
        ui.showQuestionImg(quiz.getQuestionIndex().question, quiz.getQuestionIndex().image); //questions.[0].question
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => { 
          quiz.guess(currentChoice); //question.[0].choices
          printPage(quiz, ui);
        });
      }

    };

    function main() {
      const quiz = new Quiz(questionsCult);
      const ui = new UIgeo();
      // geografia.innerHTML = "";
    
      printPage(quiz, ui);
    }
    



 

    main();


 


    // const geografia = document.getElementById('geografia')
    
    // const todo = document.getElementById('todos')

    // geografia.addEventListener('click', main)
    