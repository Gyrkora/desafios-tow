
//Desafio II = simulador usando ciclo, funciones y condicional

/* Calcular cuánta vitamina A necesita a diario 
Algoritmo >>>>> Pedir el nombre, edad, (masa muscular? = peso x altura) y tipo de actividad física (MET) */

/* --------------- Cuántas calorias gastas basicamente a diario --------------- */

/*  basal metabolic rate - bmr Mifflin-St. Jeor formula. 

Men: 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5
Women: 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161 */


alert('Vamos a calcular cuántas calorías gastas diariamente dependiendo de tu edad, género, peso, altura e intensidad física promedio diaria. ¡Vamos a ver!')
const firstName =  prompt('¿Cómo te llamas?');
let gender = prompt('¿Eres hombre o mujer biologicamente?');

let age = parseFloat(prompt('¿Cuántos años tienes?'));
while (Number.isNaN(age)) {
  alert('ingrese numero')
  age = parseFloat(prompt('¿Cuántos años tienes?'));
}
let weight = parseFloat(prompt('¿Cuántos pesas en kg?'));
while (Number.isNaN(weight)) {
  alert('ingrese numero')
  weight = parseFloat(prompt('¿Cuántos pesas en kg?'));
}
let height = parseFloat(prompt("¿Cuánto mides en cm? por ejemplo: 1.70 son 170cm"));
while (Number.isNaN(height)) {
  alert('ingrese numero')
  height = parseFloat(prompt("¿Cuánto mides en cm? por ejemplo: 1.70 son 170cm"));
} 

const howMuchEx = prompt('Con respecto a tu actividad física, ¿Cómo te identificarías mejor? Elige una alternatva:  \n\nA) Actividad intensiva: correr, hacer aeróbica, llevar cargas pesadas arriba por las escaleras, escabar, hacer trabajo de tierra como agricultura, etc.  \n\nB) actividad moderadamente intensa: caminar a paso rápido, limpiar con mopa o aspiradora, etc.  \n\nC) Actividad liviana: Caminar a paso lento, esperar en una cola, cocinar, entre otros. \n\nD) Actividad sedentaria: sentarse, acostarse, reclinarse, etc. \n\n');

let totalcalories;
let met = howMuchEx.toUpperCase();
let genderdef = gender.toLowerCase();


let bmrWoman = function(af) {
  totalcaloriesWoman = ((10 * weight) + (6.25 * height) - (5 * age) - 161) * af
  return totalcaloriesWoman;
}

let bmrMan = function(af) {
  totalcaloriesMan = ((10 * weight) + (6.25 * height) - (5 * age) + 5) * af
  return totalcaloriesMan;
}


if(met  === "A" && gender === 'mujer' ) {
    alert( firstName + " gastas aproximadamente "+ bmrWoman(1.2) + ' calorías por día')
} else if (met  === "B" && gender === 'mujer' ) {
  alert( firstName + " gastas aproximadamente "+ bmrWoman(1.375) + ' calorías por día')

} else if (met === "C" && gender === 'mujer') {  
  alert( firstName + " gastas aproximadamente "+ bmrWoman(1.55) + ' calorías por día')

} else if (met === "D" && gender === 'mujer') {
  alert( firstName + " gastas aproximadamente "+ bmrWoman(1.725) + ' calorías por día')
}


if(met  === "A" && gender === 'hombre' ) {
  alert( firstName + " gastas aproximadamente "+ bmrMan(1.2) + ' calorías por día')
} else if (met  === "B" && gender === 'hombre' ) {
alert( firstName + " gastas aproximadamente "+ bmrMan(1.375) + ' calorías por día')

} else if (met === "C" && gender === 'hombre') {

alert( firstName + " gastas aproximadamente "+ bmrMan(1.55) + ' calorías por día')

} else if (met === "D" && gender === 'hombre') {
alert( firstName + " gastas aproximadamente "+ bmrMan(1.725) + ' calorías por día')
} 

 




  
    