
import { questionsGr } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UIgeo } from "./models/UI.js";



   /* --------------- Gramatical app --------------- */

   const printGram = (quiz, ui) => {
    if (quiz.isEnded()) {
      ui.showScores(quiz.score);
    } else {
      ui.showQuestion(quiz.getQuestionIndex().question)
      ui.showAnwerGram(quiz.getQuestionIndex().answer)
      quiz.next(quiz.getQuestionIndex())

      

      // console.log(quiz.getQuestionIndex());


      
    }
  } 

  
  
  function gramatical() {
    const quizGram = new Quiz(questionsGr);
    const uiGram = new UIgeo();
  
    printGram(quizGram, uiGram);
  }
  

  gramatical()





// showQuestion(writtenQuestion) {
//     questionHTML.innerHTML = writtenQuestion;
// }