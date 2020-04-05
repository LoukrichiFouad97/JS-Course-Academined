/* eslint-disable no-unused-vars */
const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
	currentResultOutput.textContent = result;
	currentCalculationOutput.textContent = text;
}

let userValue = Number(userInput.value);
let result = Number(currentResultOutput.textContent);

addBtn.onclick = add(result, userValue);

function add(num1, num2) {
	currentCalculationOutput.textContent = num1 + num2;
}
