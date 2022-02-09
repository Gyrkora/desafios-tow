
 const cardCategories = [
  {
    id: "gramatical",
    url: "src/pages/gramaticales.html",
    bg: "hover:bg-verde-TOW-O"
  },

  {
    id: "geografico",
    url: "src/pages/geografico.html",
    bg: "hover:bg-celeste-TOW"
  },

  {
    id: "pronunciacion",
    url: "src/pages/pronunciacion.html",
    bg: "hover:bg-cafe-TOW"
  },

  {
    id: "cultural",
    url: "src/pages/cultural.html",
    bg: "hover:bg-violet-400"
  },
];

/* --------------- DOM --------------- */
document.querySelector(".cardjs").innerHTML = cardCategories.map(
  (cardCategories) =>
  
  `<div class="btn card_catg ${cardCategories.bg} ">
      <a href=${cardCategories.url}>
        <div class="text-center py-4">
          <h2 >${cardCategories.id}</h2>
        </div>
      </a>
  </div>`
).join(''); 


/* --------------- Multiple Choice --------------- */


let ptje = [];


/* --------------- Funciones --------------- */

/* true or false (multipleChoice) */
function validate(variable, letra){  
    if(variable  === letra){
        variable = true;
        // alert('¡Súper! Ganas 1 punto 😁') 
        ptje.push(1);
        console.log(ptje);
    } else  {
        variable = false;
        error();
    }     
}

/* error */
function error() {
    alert('Ups, lo siento!. No es correcto 😥') 
}










/* --------------- Preguntas y Respuestas --------------- */





/* agregando y removiendo preguntas */
// diceEl.classList.add('hidden');
// diceEl.classList.remove('hidden');



/* --------------- Puntaje Total --------------- */

/* calcular ptje total */
// let ptjeTotal = 0

// for (let i = 0; i < ptje.length; ++i) {
//     ptjeTotal += ptje[i];
// }

// console.log(ptjeTotal)


// if (ptjeTotal <= 1) { ///* comparar objeto o array de paises de latinoamerica y ver si es de uno de ellxs o no */
//     alert( firstName + ' tu puntaje total es ' + ptjeTotal + ', parece que no sabes mucho sobre Latinoamérica y el Caribe 😪')
// } else if (ptjeTotal <= 2) {
//     alert( firstName + ' tu puntaje total es ' + ptjeTotal + ', al parecer sabes lo suficiente de Latinoamérica y el Caribe 😎')
// } else {
//     alert( firstName + ' tu puntaje total es ' + ptjeTotal + ', sabes muchisimo sobre Latinoamérica y el Caribe. ¡Felicitaciones! 🎈🎉✨ ')
// }








