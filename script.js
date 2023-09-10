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
    
}

let operands = []

const displayScreen = document.querySelector(".displayScreen")
const numberbuttons = document.querySelectorAll(".numbersContainer button")

numberbuttons.forEach(button =>{
   
    button.addEventListener('click', ()=>{
        if(button.textContent === "AC" || button.textContent === "=" ){
            return;
        }
        const number = button.textContent;
        displayScreen.textContent += number

        

    })
})

