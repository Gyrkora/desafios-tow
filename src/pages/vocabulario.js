
import { vocabulary } from "./data/data.js";
const showVocab = document.getElementById('showVocab');

for (let i = 0; i < showVocab.length; i++)
    showVocab[i] = showVocab[i].trim();

showVocab.innerHTML = vocabulary.map( (word) => 

`<div class="flex flex-col items-center justify-center" >
<div class=" p-[2rem] w-[7rem]  max-w-[90%] bg-red-500 m-2 rounded-md"><p>${word}</p></div>
<button class=" border-2 border-double border-green-800 rounded-lg px-3 hover:bg-amber-500 hover:border-orange-600 " type="button"  id="removeWord"> ✔ </button>
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