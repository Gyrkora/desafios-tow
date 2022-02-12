
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";
import { questions } from "./data/questions.js";



const geografia = document.getElementById('geografia')

/* --------------- Escribiendo en el DOM --------------- */

const printPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.showScores(quiz.score);
    } else {
        console.log(quiz.score);
        ui.showQuestion(quiz.getQuestionIndex().question); //questions.[0].question
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => { 
          quiz.guess(currentChoice); //question.[0].choices
          printPage(quiz, ui);
        });
      }

    };

    function main() {
      const quiz = new Quiz(questions);
      const ui = new UI();
      // geografia.innerHTML = "";
    
      printPage(quiz, ui);
    }
    
   
    // const todo = document.getElementById('todos')

    // geografia.addEventListener('click', main)
    
    

    main();
 