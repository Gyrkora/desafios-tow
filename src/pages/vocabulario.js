
import { vocabulary } from "./data/data.js";
const showVocab = document.getElementById('showVocab');

// for (let i = 0; i < showVocab.length; i++)
//     showVocab[i] = showVocab[i].trim();

showVocab.innerHTML = vocabulary.map( (word) => 

`<div class="flex flex-col items-center justify-center" >
<div class="card_words"><p>${word}</p></div>
<button class="btnRemoveWord" type="button"  id="removeWord"> ✔ </button>
</div> 
`).join("")


console.log(vocabulary);






/* --------------- COMENTARIOS NECESARIOS --------------- */

//eliminar espacios
// word.replace(/\s+/g,'')
// let btnRemoveW = document.getElementById('removeword')

//btn remover localstorage
// btnRemoveW.addEventListener('click', function() {
//     localStorage.removeItem()
// })