
import { preguntasGeo } from "./data.js"; /* se important las arrays de las preguntas */

import { Question } from "../models/Question.js";


/* --------------- Escribiendo preguntas Geo --------------- */
export const questions = preguntasGeo.map ( 
    (question) => 
    new Question(question.question, question.choices, question.answer)
)

