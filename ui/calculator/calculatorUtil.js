// getting the info
const numberOne = document.getElementById("numberOne").value;
const numberTwo = document.getElementById("numberTwo").value;
const mathOpperator = document.getElementsByClassName("symbol");

// Function for addition
function add(num1, num2) {
  return num1 + num2;
}

// Function for subtraction
function subtract(num1, num2) {
  return num1 - num2;
}

// For multiplying
function multiply(num1, num2) {
  return num1 * num2;
}

// Function for division
function divide(num1, num2) {
  if (num2 === 0) return undefined;
  return num1 / num2;
}

function calculator(num1, num2, opperator) {
  let num1 = numberOne;
  let num2 = numberTwo;
  let opperator = mathOpperator;

  if (opperator === "+") {
    result = add(num1, num2);
  } else if (opperator === "-") {
    result = subtract(num1, num2);
  } else if (opperator === "*") {
    result = multiply(num1, num2);
  } else if (opperator === "/") {
    result = divide(num1, num2);
  } else {
    result = "Invalid operation";
  }
}

// const result = calculator(numberOne, numberTwo, mathOperator);
const result = calculator(numberOne, numberTwo, mathOperator);

console.log(result);

// putting the answer out
