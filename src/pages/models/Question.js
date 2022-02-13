/* Aquí se creará el "template" para identificar las preguntas y sus respuestas correctas respectivamente */


class MultipleQuestion {

    constructor(question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }


    correctAnswer(electedChoice) {
        return electedChoice === this.answer /* true or false */
    }
}




class OralQuestion {

    constructor(question, answer) {
        this.question = question
        this.answer = answer
    }

}


class Categorias {
    constructor(id, url, bg) {
        this.id = id;
        this.url = url;
        this.bg = bg
    }
}


export { MultipleQuestion, OralQuestion, Categorias }
