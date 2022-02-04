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
  
const respuestasGeo = {

  r1: 'c',
  r2: 'a',
  r3: 'b'
 
}
  

  //selecting la tarjeta de GEO
  let cardGeo1 = document.querySelector('.cardGeo1');



  //poniendo pregunta adentro DOM
   class AlDom {

    constructor(preguntas) {
      // this.sgte = sgte
      this.preguntas = preguntas;
      // this.sgtePregunta = sgte
    }

    
  
    // sgte( ) {
    //   this.sgte.printDom();
    // }
  

    printDom() {
      cardGeo1.innerHTML =  
  
  `<div class="btn card_catg flex flex-col items-left py-10">
  <h2 class="font-bold mb-5">${this.preguntas.p0}</h2>

  <div class="flex flex-col items-left gap-5">
    <div
      class="hover:bg-celeste-TOW hover:border-amarillo-TOW card_alternaativas"
    >
        <p>${this.preguntas.a}</p>
    </div>
    <div
      class="hover:bg-celeste-TOW hover:border-amarillo-TOW card_alternaativas"
    >
      <h3>${this.preguntas.b}</h3>
    </div>
    <div
      class="hover:bg-celeste-TOW hover:border-amarillo-TOW card_alternaativas"
    >
      <h3>${this.preguntas.c}</h3>
    </div>
    <div
      class="hover:bg-celeste-TOW hover:border-amarillo-TOW card_alternaativas"
    >
      <h3>${this.preguntas.d}</h3>
    </div>

    <div class="flex flex-col justify-center items-center md:flex-row gap-y-4 " > 

              <button class=" next bg-celeste-TOW max-w-3/4 mx-auto my-0 px-8 py-2 mt-2 rounded-xl " onclick="sgte()">anterior</button>

              <button class=" next bg-celeste-TOW max-w-3/4 mx-auto my-0 px-8 py-2 mt-2 rounded-xl" onclick="sgte()">Siguiente</button>

    </div>

  </div> 
</div>`



    }

  } 

  
  let geoQ1 = new AlDom(preguntasGeo.q1)
  let geoQ2 = new AlDom(preguntasGeo.q2)
  let geoQ3 = new AlDom(preguntasGeo.q3)


  //declarando las preguntas
 

  /* --------------- BUTTONS --------------- */
  function sgte() {



    geoQ2.printDom() /// con map dentro del AlDom como method - poner en DOM desde el js el click
  }



  geoQ1.printDom()
  

  



  /* Geoquestions1.printDom().sgte() */ /// chain method
  