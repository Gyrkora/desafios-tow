'use strict';

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
      ui.next( () => { 
        quiz.addIndex()  
        printGram(quiz, ui)
        console.log(quiz.getQuestionIndex().question)
      });
    }  
  };
  
  function gramatical() {
    const quizGram = new Quiz(questionsGr);
    const uiGram = new UIgeo();
  
    printGram(quizGram, uiGram);
    
  }
  
  gramatical();






      // ui.next( ) {
    
        // const  btnSgte = document.getElementById('sgte');
        // btnSgte.addEventListener('click', function () {
        //   quiz.addIndex()  
        //   btnSgte.innerText = `sgte`;
        //   console.log(quiz.getQuestionIndex().answer)
        //   printGram(quiz, ui)
        // }) 
        
    // }
   