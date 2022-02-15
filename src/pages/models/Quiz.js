
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
        if (this.getQuestionIndex().correctAnswer(electedChoice)) { /* respuesta correcta */
            this.score++
        }

        this.questionIndex++; /* para pasar a la siguiente pregunta */

    }

    
    addIndex() {
            this.questionIndex++;    
    }


    getIndex(){
        return this.questionIndex
    }


}