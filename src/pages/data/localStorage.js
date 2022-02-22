import { vocabTemp } from "./data.js"

//declarando variables del DOM
let btnVocab = document.getElementById("btnVocab");
let mostrado = document.getElementById("mostrado");


//Seleccionando la palabra (cajita.value)
function getSelectionText() {
    let text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
    }
    return text;
  }
  
  let cajita = document.getElementById("cajita");
  
  document.onmouseup = document.onkeyup = document.onselectionchange = function () {
        cajita.value = getSelectionText();
      };
  
let agregandoArray = [];
  printVocab();
  
  btnVocab.addEventListener("click", addingWords);
  
  function addingWords() {
    if (cajita.value != "") {
      //AGREGO LA CATEGORIA AL ARRAY
      agregandoArray.push(cajita.value);
      console.log(agregandoArray); //strings
  
      //Se agregarán los valores de agregandoArray
      localStorage.setItem("palabrasNuevas", agregandoArray);
    }
    printVocab();
  }
  
  
//const vocabTemp = localStorage.getItem("palabrasNuevas").split(",");
  console.log(vocabTemp);
  
function printVocab() {
    //PREGUNTO SI YA EXISTE LA CLAVE EN EL LOCAL STORAGE
    if ("palabrasNuevas" in localStorage) {
      //TRANSFORMO DE TEXTO A ARRAY CON SPLIT
      agregandoArray = localStorage.getItem("palabrasNuevas").split(",");
      //CONCATENO EN UNA VARIABLE TODOS LOS VALORES DEL ARRAY CON JOIN
      let salida = `${agregandoArray.join(",")}`;
  
      //MODIFICO EL SELECT AGREGANDO LOS VALORES GUARDADOS EN LA VARIABLE SALIDA
    //   mostrado.innerHTML = salida;
    }
  }
  
//   export let vocabularioTotal = vocabTemp;



  