
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

    guess(electedChoice, text) {
       if (this.getQuestionIndex().correctAnswer(electedChoice) ) {
        this.score++
        if (this.score < 2) {
            Swal.fire({
                title: `Súper! tienes: ${this.score} punto 😀`,
                text: text,
                icon: 'success',
                confirmButtonText: 'Continuar'
              })
        } else {
            Swal.fire({
                title: `Excelente! tienes: ${this.score} puntos 😁`,
                text: text,
                icon: 'success',
                confirmButtonText: 'Continuar'
              })
        }
        
       }  
        this.questionIndex++; 

    }

    
    addIndex() {
            this.questionIndex++;    
    }


    getIndex(){
        return this.questionIndex
    }


}