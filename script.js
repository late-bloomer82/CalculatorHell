

// Select necessary elements from the HTML document
const displayScreen = document.querySelector(".displayScreen");
const numberbuttons = document.querySelectorAll(".numbersContainer button");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const operators = document.querySelectorAll(".operatorsContainer button");

// Variables to store the first number, operator, and second number
let firstNumber = "";
let operator = "";
let secondNumber = "";

// Function that clears the content of the screen
function clearDisplayScreen() {
  displayScreen.textContent = "";
}

// Math functions
function add(number1, number2) {
  return number1 + number2;
}

function substract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


function calculate() {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);
  let result;

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = substract(num1, num2);
      break;
    case "x":
      result = multiply(num1, num2);
      break;
    case "÷":
      if (num2 !== 0) {
        result = divide(num1, num2);
        //Round large decimal numbers
        result = result.toFixed(10);
      } else {
        result = "Error";
      }
      break;
    default:
      result = "Error";
  }

  // Display the result on the calculator's display screen
  displayScreen.textContent = result;

  // Reset firstNumber, operator, and secondNumber for the next operation
  firstNumber = result.toString();
  operator = "";
  secondNumber = "";
}

// Iterate through each digit button to create a dynamic calculator screen
numberbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "AC" || button.textContent === "=") {
      return;
    }
    if (!operator) {
      // If no operator has been set, append to the first number
      firstNumber += button.textContent;
    } else {
      // If an operator is set, append to the second number
      secondNumber += button.textContent;
    }
    displayScreen.textContent += button.textContent;
  });
});

// Iterate through each operator button to create a dynamic calculator screen
operators.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstNumber && secondNumber) {
     
      calculate();
    }
    operator = button.textContent;
    displayScreen.textContent += operator;
  });
});


clearButton.addEventListener("click", () => {
  clearDisplayScreen();
  firstNumber = "";
  operator = "";
  secondNumber = "";

});


equalsButton.addEventListener("click", () => {
  if (firstNumber && operator && secondNumber) {
    calculate();
  }
});
