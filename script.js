function add(a,b){
 return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

let firstNumber;
let operator;
let secondNumber;

function operate(firstNumber,secondNumber,operator){
    add(firstNumber,secondNumber)
}

const buttonsDiv = document.querySelector('.buttonsContainer')
const numbersDiv = document.querySelector('.numbersContainer')

for(i=0;i<10;i++){
    let button = document.createElement('button')
    button.className = "button"
    numbersDiv.appendChild(button)
}
