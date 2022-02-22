
export const cardCategories = [
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

export const preguntasGeo = [

    {
        question: '1.- ¿Cuáles de los siguientes países son de Centroamérica?',
        choices: ['A) EEUU, Chile, Costa Rica y México', 'B) Guatemala, Honduras, Chile y Costa Rica', 'C) Honduras, El Salvador, Haití y Costa Rica', 'D) Perú, Bolivia, Republica Dominicana y El Savador', ],
        answer: 'C) Honduras, El Salvador, Haití y Costa Rica',
    },

    {
        question: '2.-¿Cuál es el baile nacional de Chile?',
        choices: ['A) La cueca', 'B) La salsa', 'C) El merengue', 'D) El tango' ],
        answer: 'A) La cueca',
    },
      
    {
        question: '3.- ¿Qué países limitan Perú con ?',
        choices: ['A) Chile, Argentina y Venezuela', 'B) Bolivia, Chile, Brasil, Ecuador y Colombia', 'C) Bolivia, Brasil, Chile, Argentina y Paraguay', 'D) Perú es una isla', ],
        answer: 'B) Bolivia, Chile, Brasil, Ecuador y Colombia'     
    }

];

/* como una array por ahora */
export const preguntasGram = [
    {
      qG: "1.- ¿Cómo hago el superlativo en español?",
      answer: "el/la más + adjetivo",
    },
  
    {
      qG: "2.- ¿Qué es un verbo?",
      answer: "Un verbo es una acción",
    },
  
    {
      qG: "3.- Nombra 3 verbos irregulares en presente y conjúgalos en pasado",
      answer: "querer, volar, conducir",
    },
  
    {
      qG: "4.- Dame una oración con el pasado del subjuntivo",
      answer: "yo no pensé que hicieras eso",
    },
  
    {
      qG: "5.- Dame una oración usando \"me parece interesante que\" ",
      answer: "me parece interesante que te guste tanto la berenjena",
    },
  
    {
      qG: "6.- Crea una oración con el verbo \"soler\"",
      answer: "Yo suelo comer mucha berenjena",
    },
    {
      qG: "7.- Crea una oración con el verbo \"soler\"",
      answer: "Yo suelo comer mucha berenjena",
    },
    {
      qG: "8.- Crea una oración con el verbo \"soler\"",
      answer: "Yo suelo comer mucha berenjena",
    },
  ];

export const preguntasCultura = [

    {
        question: 'El Primer Encuentro Feminista Latinoamericano y del Caribe se estableció el 25 de noviembre como el Día de lucha contra la violencia hacia las mujeres y hoy en día ya llevamos 38 años. Este día ocurrió un hecho que ni la historia y las mujeres olvidaremos nunca. Este día ocurrió..',
        choices: [
          'A) 129 mujeres murieron en un incendio en la fábrica Cotton, de Nueva York, Estados Unidos, luego de que se declararan en huelga con permanencia en su lugar de trabajo.', 
          'B) 3 hermanas activistas fueron asesinadas el mismo día durante la dictadura de Trujillo por luchar en contra del régimen.', 
          'C) El 25 de noviembre de 1960 comenzó la experimentación forzadas de anticonceptivos en Puerto Rico con mujeres originarias de ese país.', 
           ],
        answer: 'B) 3 hermanas activistas fueron asesinadas el mismo día durante la dictadura de Trujillo por luchar en contra del régimen.',
        image: "../img/primerEncuentroFeminista.jpg"
    },

    {
        question: 'Misiones religiosas indígenas que escondieron en templos perdidos elementos propios de sus creencias, incluyendo momias, artefactos, joyas, amuletos y papiros.',
        choices: [
          'A) Misiones religiosas indígenas que escondieron en templos perdidos elementos propios de sus creencias, incluyendo momias, artefactos, joyas, amuletos y papiros.', 
          'B) Comunidades de africanos que desarrollaron su cultura nacional y sistema de producción agrícola para sobrevivir, y a veces, hasta para participar de intercambios económicos con pueblos de colonias europeas abandonadas por las capitales.', 
          'C) Verdaderos pueblos de cimarrones o fugitivos africanos e indígenas que se internaron en la geografía y desarrollaron un sistema político, social y económico paralelo a los reinados.', 
           ],
        answer: 'C) Verdaderos pueblos de cimarrones o fugitivos africanos e indígenas que se internaron en la geografía y desarrollaron un sistema político, social y económico paralelo a los reinados.',
        image: "../img/cimarrones.JPG"
    },
      
    {
        question: 'Zonotrichia capensis: copetón común, chincol, tico-tico, es un pajarito que habita gran parte de Latinoamérica, como Dominicana y Haití, Aruba, Colombia, Brasil, Chile hasta Tierra del Fuego. Se le ve en campos, jardines y centros urbanos saltando en el piso para comer insectos y semillas, y cantando en ramas de árboles y cables. Su canto es de particular gusto, y en Chile las personas dicen que él canta:',
        choices: [
          'A) Dónde está mi tío Agustín.', 
          'B) Se me ha perdido el calcetín.', 
          'C) Dale con el tiki tí.', 
           ],
        answer: 'A) Dónde está mi tío Agustín.' , 
        image: "../img/pajariTOW.jpg"   
    }



]


export let vocabTemp = localStorage.getItem("palabrasNuevas").split(",");
