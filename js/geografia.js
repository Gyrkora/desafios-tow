

/* --------------- Informacion y saludo --------------- */
alert('¿Eres de Latinoamérica o el Caribe? Vamos a ver cuánto sabes de tus raíces con tan sólo 3 preguntas')
let firstName = prompt('¿Cómo te llamas?');


/* --------------- Declarando arrays de objetos --------------- */
const preguntasGeo = [
    {
          p0: '1.- ¿Cuáles de los siguientes países son de Centroamérica?',
          a: 'A) EEUU, Chile, Costa Rica y México',
          b: 'B) Guatemala, Honduras, Chile y Costa Rica',
          c: 'C) Honduras, El Salvador, Haití y Costa Rica',
          d: 'D) Perú, Bolivia, Republica Dominicana y El Savador',
          answer1: 'incorrecto',
          answer2: 'incorrecto',
          answer3: 'correcto',
          answer4: 'incorrecto',
      },
    {
        p0: '2.-¿Cuál es el baile nacional de Chile?',
        a: 'A) La cueca',
        b: 'B) La salsa',
        c: 'C) El merengue',
        d: 'D) El tango',
        answer1: 'correcto',
        answer2: 'incorrecto',
        answer3: 'incorrecto',
        answer4: 'incorrecto',
    } ,
    
    {          
        p0: '3.- ¿Qué países limitan Perú con ?',
        a: 'A) Chile, Argentina y Venezuela ',
        b: 'B) Bolivia, Chile, Brasil, Ecuador y Colombia',
        c: 'C) Bolivia, Brasil, Chile, Argentina y Paraguay',
        d: 'D) Perú es una isla',
        answer1: 'incorrecto',
        answer2: 'correcto',
        answer3: 'incorrecto',
        answer4: 'incorrecto',
    }
]  
  
  
const respuestasGeo = {

  rq1: {

    a: 'c',
    b: 'b',
    c: 'c',
    d: 'd'
   
  }
}


  
  /* --------------- Escribiendo en el DOM --------------- */


  //selecting la tarjeta de GEO
  let papaCardGeo = document.getElementById('papaCardGeo')
  
  //creando el elemento 
  let contenido= document.createElement('div');//CREO EL NODO 

  //escribiendo preguntas dentro del DOM
  let cardGeo = document.getElementById("cardGeo1").innerHTML = preguntasGeo.map(
    (pregunta) =>

      
  `<div class="btn card_catg flex flex-col items-left py-10">
  <h2 class="font-bold mb-5">${pregunta.p0}</h2>

  <div class="flex flex-col items-left gap-5 undiv">
    <div
      class="hover:bg-[#CABDF0] hover:border-[#BE84F0] card_alternativas alternativa"  onClick="correction('${pregunta.answer1}')"
    >
        <button  >${pregunta.a}</button>
    </div>
    <div
      class="hover:bg-[#CABDF0]  hover:border-[#BE84F0] card_alternativas alternativa" onClick="correction( '${pregunta.answer2}')"
    >
      <butto >${pregunta.b}</button>
    </div>
    <div
      class="hover:bg-[#CABDF0] hover:border-[#BE84F0] card_alternativas alternativa" onClick="correction('${pregunta.answer3}' )"
    >
      <butto >${pregunta.c}</button>
    </div>
    <div
      class="hover:bg-[#CABDF0] hover:border-[#BE84F0] card_alternativas alternativa" onClick="correction( '${pregunta.answer4}')"
    >
      <butt  onclick="" >${pregunta.d}</button>
    </div>

     <div class="flex flex-col justify-center items-center md:flex-row gap-y-4 " > 

</div> 
   
  </div> 
</div>`).join('');



/* --------------- Validacion de preguntas --------------- */

let ptje = []


/* error */
function error() {
  alert('Ups, lo siento!. No es correcto 😥') 
}

function correction(id) {

  if (id === 'correcto') {
    alert('super bien, sumas 1 punto 🥰')
    ptje.push(1);
    console.log(ptje);
  } else if (id === 'incorrecto') {
    error();
  }
  
  console.log( 'Tu puntaje actual es: ' +
    ptje.reduce((a, b) => a + b, 0)
  )

  calcPtje( )
 

}


/* --------------- Calcular Puntaje Total --------------- */
// let ptjeTotal = 0

function calcPtje( ) {

//   for (let i = 0; i < ptje.length; ++i) {
//       ptjeTotal += ptje[i];
//   }

if (ptje <= 1) { ///* comparar objeto o array de paises de latinoamerica y ver si es de uno de ellxs o no */
  console.log( 'tú puedes !' + firstName + '😊')
} else if (ptje <= 2) {
  console.log( firstName + ' Al parecer sabes lo suficiente de Latinoamérica y el Caribe 😎')
} else {
  console.log( firstName + ' Sabes muchisimo sobre Latinoamérica y el Caribe. ¡Felicitaciones! 🎈🎉✨ ')
}
  
  
}





// if (ptjeTotal <= 0) { ///* comparar objeto o array de paises de latinoamerica y ver si es de uno de ellxs o no */
//   console.log( firstName + ' tu puntaje total es ' + ptjeTotal + ' ¿Falta estudiar un poco más sobre nuestras raíces?')
// } else if (ptjeTotal <= 1) {
//     console.log( firstName + ' tu puntaje total es ' + ptjeTotal + ', tú puedes ! 😊')
// } else if (ptjeTotal >= 3) {
//   console.log( firstName + ' Wow, súper bien! Tienes 2 respuestas correctas. Al parecer sabes lo suficiente de Latinoamérica y el Caribe 😎')
// } else {
//   console.log( firstName + ' tu puntaje total es ' + ptjeTotal + ', sabes muchisimo sobre Latinoamérica y el Caribe. ¡Felicitaciones! 🎈🎉✨ ')
// }


