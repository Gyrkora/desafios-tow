
export class Quiz {

    /* Propiedades globales de la clase */
    score = 0;
    questionIndex = 0;

    /* propiedades dadas - que serán las preguntasGeo */
    constructor (questions) {
        this.questions = questions
    }

    /* en qué pregunta está */
    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }
  
    isEnded () {
        return this.questions.length === this.questionIndex;
    }

    guess(electedChoice) {
        this.getQuestionIndex().correctAnswer(electedChoice) && this.score++


        this.questionIndex++; 

    }

    
    addIndex() {
            this.questionIndex++;    
    }


    getIndex(){
        return this.questionIndex
    }


}