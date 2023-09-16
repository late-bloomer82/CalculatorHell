
//Select necessary elements from the html document.
const displayScreen = document.querySelector(".displayScreen")
const numberbuttons = document.querySelectorAll(".numbersContainer button")
const clearButton = document.getElementById("clear")
const equalsButton = document.getElementById("equals")
const operators = document.querySelectorAll(".operatorsContainer button")



//Iterate through each digit button to create a dynamic calculator screen
numberbuttons.forEach(button =>{
   
    button.addEventListener('click', ()=>{
        if(button.textContent === "AC" || button.textContent === "=" ){
            return;
        }
        const number = button.textContent;
        displayScreen.textContent += number

        

    })
})





//Iterate through each operator button to create a dynamic calculator screen
operators.forEach(button =>{
    button.addEventListener("click", ()=>{
          let buttonContent = button.textContent
          displayScreen.textContent+=buttonContent
    })
})

clearButton.addEventListener('click',()=>{

    displayScreen.textContent= "";
})



//Math functions
function add(number1, number2){
  return number1+number2;
}

function substract(number1, number2){
  return number1-number2;
}

function multiply(number1, number2){
  return number1*number2;
}

function divide(number1, number2){
  return number1/number2;
}






//Creating all the logic that performs the mathematical operations
equalsButton.addEventListener("click", ()=>{
   
  // Get the current content of the display screen
  const expression = displayScreen.textContent;

  // Use regular expressions to split the expression into operands and operator
  const [operand1, operator, operand2] = expression.split(/([+\-x÷])/);

  // Check if you have valid operands and an operator
  if (operand1 && operator && operand2) {
    // Parse operands to numerical values
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    

    // Perform the calculation based on the operator
    let result;
    switch (operator) {
      case '+':
        result = add(num1,num2)
        break;
      case '-':
        result = substract(num1,num2)
      case 'x':
        result = multiply(num1,num2)
        break;
      case '÷':
        if (num2 !== 0) {
          result = divide(num1,num2)
        } else {
          // Handle division by zero error
          result = 'Error';
        }
        break;
      default:
        // Handle invalid operator
        result = 'Error';
    }

    // Display the result on the calculators display screen
    displayScreen.textContent = result;
  }
});
 
