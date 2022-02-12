const questionHTML = document.getElementById('question');

export class UI {
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

    showScores(score) {
        const gameOverHTML = `<h1>Result</h1>
                            <h2 id="score"> Your scores: ${score}</h2>`;

        const element = document.getElementById('todos');
        
        element.innerHTML = gameOverHTML;
    }




    


}


/* --------------- show progress? --------------- */

/* showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
*/