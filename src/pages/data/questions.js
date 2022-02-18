
import { preguntasGeo, preguntasGram, cardCategories, preguntasCultura } from "./data.js"; /* se important las arrays de las preguntas */

import { MultipleQuestion, OralQuestion, Categorias,  } from "../models/Question.js";


/* --------------- Escribiendo preguntas Geo --------------- */
export const categories = cardCategories.map ( 
    (categoria) => 
    new Categorias(categoria.id, categoria.url, categoria.bg)
)

export const questionsGr = preguntasGram.map (
    (question) =>
    new OralQuestion(question.qG, question.answer)
)


export const questionsGe = preguntasGeo.map ( 
    (question) => 
    new MultipleQuestion(question.question, question.choices, question.answer)
)

export const questionsCult = preguntasCultura.map (
    (question) =>
    new MultipleQuestion(question.question, question.choices, question.answer, question.image)
)




