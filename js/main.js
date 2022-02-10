
/* --------------- Declarando categorias --------------- */

 const cardCategories = [
  {
    id: "gramatical",
    url: "../src/pages/gramaticales.html",
    bg: "hover:bg-verde-TOW-O"
  },

  {
    id: "geografico",
    url: "../src/pages/geografico.html",
    bg: "hover:bg-celeste-TOW"
  },

  {
    id: "pronunciacion",
    url: "../src/pages/pronunciacion.html",
    bg: "hover:bg-cafe-TOW"
  },

  {
    id: "cultural",
    url: "../src/pages/cultural.html",
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




















