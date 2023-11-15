'use strict'
// Funzioni

function myCreateElement(tag, className, content) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);
    return element;
}

// Programma 

const playBtn = document.querySelector('.btn');
const board = document.querySelector('.board');
console.log(board);

playBtn.addEventListener("click", function () {
    board.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
        const myElement = myCreateElement('div', 'cell', i);
        myElement.addEventListener("click", function () {
            myElement.classList.add('active');
            console.log('Cella', i);
        })
        board.append(myElement);
    }
});

