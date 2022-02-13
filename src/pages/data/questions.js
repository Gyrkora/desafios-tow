
import { preguntasGeo, preguntasGram, cardCategories } from "./data.js"; /* se important las arrays de las preguntas */

import { MultipleQuestion, OralQuestion, Categorias } from "../models/Question.js";


/* --------------- Escribiendo preguntas Geo --------------- */
export const questionsGe = preguntasGeo.map ( 
    (question) => 
    new MultipleQuestion(question.question, question.choices, question.answer)
)

export const questionsGr = preguntasGram.map (
    (question) =>
    new OralQuestion(question.qG, question.answer)
)

export const categories = cardCategories.map ( 
    (categoria) => 
    new Categorias(categoria.id, categoria.url, categoria.bg)


)