/* Aquí se creará el "template" para identificar las preguntas y sus respuestas correctas respectivamente */



class Categorias {
    constructor(id, url, bg) {
        this.id = id;
        this.url = url;
        this.bg = bg
    }
}


class MultipleQuestion {

    constructor(question, choices, answer, image) {
        this.question = question;
        this.choices = choices;
        this.answer = answer;
        this.image = image;
    }


    correctAnswer(electedChoice) {
        return electedChoice === this.answer /* true or false */
    }
}

class OralQuestion extends MultipleQuestion {

    constructor(question, answer) {
        super(question)
        this.answer = answer
    }

}





export { MultipleQuestion, OralQuestion, Categorias }
