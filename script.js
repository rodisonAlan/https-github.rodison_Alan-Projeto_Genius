let order = [];
let clickedOrder = []; 
let score = 0;


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}


let lightColor = (elemet, number) => {
    number = number * 500;
    setTimeout(() => {
       elemet.classList.add('selected'); 
    }, number  - 250);
    setTimeout(() => {
        elemet.classList.remove('selected');
    });
}


let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextlevel();
    }
}


let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
        createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected'); 
        checkOrder();
    },250);
  
}


let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}


let nextlevel = () => {
    score ++;
    shuffleOrder();
}


let gameOver = () => {
    alert(`Pontuanção: ${score}!\nVocê perdeu o jogo!\nClique em Ok para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

 
let playGame = () => {
    alert('Bem vindo ao Genius! Inciando novo Jogo!');
    score = 0;

    nextlevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


playGame(); 