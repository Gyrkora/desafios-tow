
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
  ];

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