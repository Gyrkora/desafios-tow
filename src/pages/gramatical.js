
import { questionsGr } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UIgeo } from "./models/UI.js";



   /* --------------- Gramatical app --------------- */

   const text = `<p>sgte</p>`;

   const printGram = (quiz, ui) => {
    if (quiz.isEnded()) {
      ui.showScores(quiz.score);
    } else {
      ui.showQuestion(quiz.getQuestionIndex().question)
      ui.showAnwerGram(quiz.getQuestionIndex().answer)
      ui.next( () => { 
        
        quiz.addIndex() 
        printGram(quiz, ui);
        
      console.log(quiz.getQuestionIndex())

      });
      // ui.next((`<p>sgte</p>`) 
      



      // quiz.addIndex()
      // printGram(quiz, ui)
      
    }  
  } 


  
  
  function gramatical() {
    const quizGram = new Quiz(questionsGr);
    const uiGram = new UIgeo();
  
    printGram(quizGram, uiGram);
  }
  

  gramatical()






   