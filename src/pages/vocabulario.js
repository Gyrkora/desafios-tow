import { vocabulary } from "./data/data.js";
const showVocab = document.getElementById("showVocab");
const clearStorage = document.getElementById('btnClearStorage')



/* --------------- Renderizando el vocabulario en el DOM --------------- */

showVocab.innerHTML = vocabulary
  .map(
    (word) =>
      `<div class="flex flex-col items-center justify-center" >
<button class="card_words"><p>${word}</p></button>
<div class="flex flex-row items-center justify-center gap-5">

<button class="definition" type="button" id="def"> ¿? </button>
</div>
</div> 
`
  )
  .join("");

{/* <button class="btnRemoveWord" type="button"  id="removeWord"> ✔ </button> */}
 
/* --------------- Definiendo las palabras con la API --------------- */
  
let def = document.getElementsByClassName("definition");

for (let i = 0; i < def.length; i++) {
  def[i].addEventListener("click", elModal);

  function elModal() {
    const firstRequest = `https://www.dictionaryapi.com/api/v3/references/spanish/json/${vocabulary[i]}?key=30f0a325-d956-4480-9a32-a9418a5c271a`;

    fetch(firstRequest)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((diccionario) => {

        let firstOriginal;
        firstOriginal =
          diccionario[0].hwi === undefined
            ? (firstOriginal = diccionario[0])
            : (firstOriginal = diccionario[0].hwi.hw);

        if (diccionario[0].shortdef === undefined) {
          Swal.fire({
            title: "elige la palabra que necesitas",
            text: diccionario,
            input: "text",
            inputAttributes: {
              autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Buscar",
            showLoaderOnConfirm: true,
            preConfirm: (palabra) => {
              return fetch(
                `https://www.dictionaryapi.com/api/v3/references/spanish/json/${palabra}?key=30f0a325-d956-4480-9a32-a9418a5c271a`
              )
                .then((response) => {
                  return response.json();
                })
                .then((diccionario2) => {
                  Swal.fire({
                    title: palabra,
                    text: diccionario2[0].shortdef,
                    icon: "info",
                    confirmButtonText: "Continuar",
                  });
                })
                .catch((error) => {
                  Swal.showValidationMessage(`Request failed: ${error}`);
                });
            },
          });
        } else {
          Swal.fire({
            title: firstOriginal,
            text: diccionario[0].fl + ` - - - ` + diccionario[0].shortdef,
            icon: "info",
            confirmButtonText: "Continuar",
          });
        }
      }).catch((error) => {
        console.log(error);
      });
  }
}



/* --------------- Botón para eliminar TODO localStorage --------------- */

let vocabCards = document.getElementsByClassName('card_words')
clearStorage.addEventListener('click', removeStorage )

function removeStorage() {

  for (const card of vocabCards) {
    
    card.innerHTML = "";
  }
 
  localStorage.clear()

 

}



/* --------------- Borrando vocabulario/locaStorage individualmente --------------- */


// const btnRemoveWord = document.getElementById('btnRemoveWord');







// /* --------------- agregando a data y guardando en localstorage --------------- */

// if(localStorage.getItem("index") == undefined) localStorage.setItem("index", 0)
// else localStorage.setItem("index", parseInt(localStorage.getItem("index")))
// let index = parseInt(localStorage.getItem("index"))

// const actualizarIndex = () =>{
//   localStorage.setItem("index", parseInt(localStorage.getItem("index")) + 1)
//   index = parseInt(localStorage.getItem("index"))
// }

// document.querySelector('#btnSend').addEventListener('click',()=>{
//   let pregunta = document.querySelector('#pregunta')
//   let web = document.querySelector('#web')

//   dataGuardada.push(new DataSubmitted(index, pregunta.value, web.value))
  
//   localStorage.setItem("data", JSON.stringify(dataGuardada));
  
//   console.log(dataGuardada)
//   actualizarIndex()

//   pregunta.value = ''
//   web.value = ''
// })

/* --------------- tomando de localstorage y guardando en data --------------- */

// if ("data" in localStorage) {
//   const guardados = JSON.parse(localStorage.getItem("data"));
//   console.log(guardados)
//   for (const generico of guardados) {
//     if(generico == null) continue
//     dataGuardada.push(new DataSubmitted(index, generico?.askingFor, generico?.web));
//   }
// }

/* --------------- Agregando data Websites al DOM --------------- */

// function showDataWebs() {

//   contenedorWebsites.innerHTML = ""

//   for (let i = 0; i < dataGuardada.length; i++) {
//     if(dataGuardada[i] == null) continue
//     let shownData = document.createElement("div");
//     shownData.setAttribute("id", `idData${dataGuardada[i].id}`)
//     shownData.innerHTML = `<h3> Request: <h4>${dataGuardada[i].askingFor}</h4> <h4>Website: ${dataGuardada[i].web}</h4></h3>
//                           <button type="button" class="btnRemoveData" id="id${dataGuardada[i].id}">Eliminar</button> `;
    
//     contenedorWebsites.append(shownData);

//     let btnRemoveData = document.querySelector(`button#id${dataGuardada[i].id}`)
//     let idTest = dataGuardada[i].id

//     btnRemoveData.addEventListener('click', () =>{
//       dataGuardada[i] = null
//       document.getElementById(`idData${idTest}`).innerHTML = `eliminado ${idTest + 1}` 

//       localStorage.setItem('data', JSON.stringify(dataGuardada))   

//       console.log(shownData)
//     })
//   }

  
// }








/* --------------- COMENTARIOS NECESARIOS --------------- */

//eliminar espacios
// word.replace(/\s+/g,'')
// let btnRemoveW = document.getElementById('removeword')
// for (let i = 0; i < showVocab.length; i++)
//     showVocab[i] = showVocab[i].trim();

//btn remover localstorage
// btnRemoveW.addEventListener('click', function() {
//     localStorage.removeItem()
// })

//localStorage.removeItem("name of localStorage variable you want to remove");
//So you want to remove all keys except a particular key, right? For that you can do something like this var key; for (var i = 0; i < localStorage.length; i++) {   key = localStorage.key(i);    if(key != particularKey){       localStorage.removeItem(key);   } } 
