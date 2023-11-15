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

playBtn.addEventListener("click", function () {
    for (let i = 1; i <= 100; i++) {
        const myElement = myCreateElement('div', 'cell', i);
        board.append(myElement);
        console.log(myElement[i]);
    }
});





