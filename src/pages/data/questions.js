
import { preguntasGeo, preguntasGram } from "./data.js"; /* se important las arrays de las preguntas */

import { MultipleQuestion, OralQuestion } from "../models/Question.js";


/* --------------- Escribiendo preguntas Geo --------------- */
export const questionsGe = preguntasGeo.map ( 
    (question) => 
    new MultipleQuestion(question.question, question.choices, question.answer)
)

export const questionsGr = preguntasGram.map (
    (question) =>
    new OralQuestion(question.qG, question.answer)
)