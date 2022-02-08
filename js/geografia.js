const preguntasGeo = 
    {
      q1: {
          
          p0: '1.- ¿Cuáles de los siguientes países son de Centroamérica?',
          a: 'A) EEUU, Chile, Costa Rica y México',
          b: 'B) Guatemala, Honduras, Chile y Costa Rica',
          c: 'C) Honduras, El Salvador, Haití y Costa Rica',
          d: 'D) Perú, Bolivia, Republica Dominicana y El Savador',
          answer: 'c',
      } ,
    

      q2: {
          
        p0: '2.-¿Cuál es el baile nacional de Chile?',
        a: 'A) La cueca',
        b: 'B) La salsa',
        c: 'C) El merengue',
        d: 'D) El tango',
        answer: 'a',
    } ,
    
      q3: {
            
        p0: '3.- ¿Qué países limitan Perú con ?',
        a: 'A) Chile, Argentina y Venezuela ',
        b: 'B) Bolivia, Chile, Brasil, Ecuador y Colombia',
        c: 'C) Bolivia, Brasil, Chile, Argentina y Paraguay',
        d: 'D) Perú es una isla',
        answer: 'b',
    }
    
    };
  
  
  //selecting la tarjeta de GEO
  let papaCardGeo = document.querySelector('.papaCardGeo')
  let cardGeo1 = document.querySelector('.cardGeo1');

  


  //poniendo pregunta adentro DOM
   class AlDom {

    constructor(preguntas) {
      
      this.preguntas = preguntas;
      
    }
  

    printDom( ) {
      cardGeo1.innerHTML =  

      
  `<div class="btn card_catg flex flex-col items-left py-10">
  <h2 class="font-bold mb-5">${this.preguntas.p0}</h2>

  <div class="flex flex-col items-left gap-5 undiv">
    <div
      class="hover:bg-[#CABDF0] hover:border-[#BE84F0] card_alternativas alternativa" id='${this.preguntas.answer}'"
    >
        <button>${this.preguntas.a}</button>
    </div>
    <div
      class="hover:bg-[#CABDF0]  hover:border-[#BE84F0] card_alternativas alternativa" id='${this.preguntas.answer}'"
    >
      <butto >${this.preguntas.b}</button>
    </div>
    <div
      class="hover:bg-[#CABDF0] hover:border-[#BE84F0] card_alternativas alternativa" id='${this.preguntas.answer}'"
    >
      <butto >${this.preguntas.c}</button>
    </div>
    <div
      class="hover:bg-[#CABDF0] hover:border-[#BE84F0] card_alternativas alternativa" id='${this.preguntas.answer}'"
    >
      <butt  onclick="" >${this.preguntas.d}</button>
    </div>

     <div class="flex flex-col justify-center items-center md:flex-row gap-y-4 " > 

  <button class=" prev card_btns" onclick="sgte()" >anterior</button>

  <button class="  card_btns" onclick="sgte()" id="next" >Siguiente </button>

</div> 
   

  </div> 
</div>`

  papaCardGeo.appendChild(cardGeo1);//AGREGO UN NUEVO HIJO A BODY PARA QUE LO MUESTRE EN EL HTML

    }

  } 

 
  

    //SELECCIONAR BOTONES GENERADOS POR CLASES


    let alternativas = document.getElementsByClassName('alternativa');
    console.log(alternativas);

    
    //ESCUCHAMOS EL EVENTO 'click' PARA CADA BOTON GENERADO
    for (const alternativa of alternativas) {
            alternativa.addEventListener('click', function () {
                    //OBTENEMOS EL PRODUCTO SELECCIONADO CON FIND Y THIS.ID
                    console.log('hola');
                    // console.log(this.id)
                    // let seleccion= preguntasGeo.find(pregunta => pregunta.q1.answer == this.id);
                    // console.log('el producto seleccionado es '+seleccion.q1);                
            });        
    }
 

  
  let geoQ1 = new AlDom(preguntasGeo.q1)
  let geoQ2 = new AlDom(preguntasGeo.q2)
  let geoQ3 = new AlDom(preguntasGeo.q3)


 
  /* --------------- BUTTONS --------------- */

  
  let prev = document.getElementsByClassName('prev');
  


  // let geoQ = [1, 2, 3];
  //   let i = 0;
    

  // function sgte() {
   
    
  //     if(i >= geoQ.length-1) i = -1;
  //     i++;
  //     return printIt();
      
  //   }

  //     //lo print al Dom
      
  //     function printIt(){

	//     'geoQ' + [i].printDom() 
       
  //   } 

  




  



/* --------------- Declarando preguntas en el DOM --------------- */
  geoQ1.printDom()
  
//  console.log(sgte());




  /* Geoquestions1.printDom().sgte() */ /// chain method
  

 

  /* fuentes


  //onclick
  
  https://stackoverflow.com/questions/14616253/javascript-calling-object-function-method-from-onclick-event-with-dynamic-argu 
  
  
  //next/prev
  
  https://github.com/skcals/javascript_image_slider/blob/master/js/main.js 

  https://stackoverflow.com/questions/14216024/previous-next-in-javascript 


  
document.getElementById('contenido').innerHTML = productos.forEach( (producto) => 
`
    <div>
        <h1>${}</h1>
    </div>
`)
  
  */


/* --------------- Informacion y saludo --------------- */
// alert('¿Eres de Latinoamérica o el Caribe? Vamos a ver cuánto sabes de tus raíces con tan sólo 3 preguntas')
// let firstName = prompt('¿Cómo te llamas?');

