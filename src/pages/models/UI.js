const questionHTML = document.getElementById('question');
const  btnSgte = document.getElementById('sgte');


 class UIgeo {
    constructor() {}

    showQuestion(writtenQuestion) {
        questionHTML.innerHTML = writtenQuestion;
    }

    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices');

        choicesContainer.innerHTML = "";

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button');
            button.addEventListener('click', () => callback(choices[i]));
            button.className = 'btns';
            button.innerText = choices[i];
            
            choicesContainer.append(button);     
        }
    }

    showQuestionImg (writtenQuestion, image) {
        questionHTML.innerHTML = 

        `<img class="pb-4 rounded-3xl " src="${image}">
        <div>${writtenQuestion}</div>`
    }

   
 

    showAnwerGram(answers) {
        const answerGramaticalContainer = document.getElementById('answerGramatical_btn');
        const answercontainer = document.createElement('div')
        const shownanswer = document.createElement('button')
        const answerCard = document.getElementById('answerCard')
            
        answerCard.innerHTML = "";

        answerGramaticalContainer.addEventListener('click', function writeAnswer() {
            shownanswer.innerText = answers;
            shownanswer.className = 'btns'
        });
        
        answerCard.append(answercontainer)
        answercontainer.append(shownanswer)
            
    }
   


    showScores(score) {
        const gameOverHTML = `<h1>Result</h1>
                            <h2 id="score"> Your scores: ${score}</h2>`;

        const element = document.getElementById('todos');
        
        element.innerHTML = gameOverHTML;
    }

    
  

    
}


export { UIgeo, btnSgte }











  


 // showAnwerGram(answers) {
    //     const answerGramaticalContainer = document.getElementById('answerGramatical_btn');
    //     const answerGramatical = document.getElementById('answerGramatical')
    
    //     // answerGramaticalContainer.innerHTML = "";

    //         answerGramaticalContainer.addEventListener('click', function writeAnswer() {
    //             answerGramatical.innerText = answers;
    //         });
            
    // }








/* --------------- show progress? --------------- */

/* showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
*/


/* --------------- show categories con innerHTML --------------- */

/*     showCategories(categories, callback) {
        const categoriesContainer = document.getElementById('categorias');
    
        categoriesContainer.innerHTML = "";
    
        for (let i = 0; i < 4; i++) {
            const eachCategorie = document.createElement('button');
            eachCategorie.addEventListener('click', () => callback(console.log('hola')))
            eachCategorie.className = 'btns',
            eachCategorie.innerText = categorias[i].id,
            
            choicesContainer.append(button);     
        }
    }
     */