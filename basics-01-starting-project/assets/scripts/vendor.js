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

// initialize the value of current
let currentResult = 0;

// get the user number input
function getuserNumber() {
	return parseInt(userInput.value);
}

function add() {
	const userNumber = getuserNumber();
	const calcExcuted = `${currentResult} + ${userNumber}`;
	currentResult += Number(userNumber);
	outputResult(currentResult, calcExcuted);
}

addBtn.addEventListener("click", add);
