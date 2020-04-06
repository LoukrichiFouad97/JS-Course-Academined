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

// Keep track of enetered values
let logEntries = [];

// get the user number input
function getuserNumber() {
	return parseInt(userInput.value);
}

// Set the User Output into page
function setUserOutput(operator, userResult, calculation) {
	const calcDescription = `${userResult} ${operator} ${calculation}`;
	outputResult(userResult, calcDescription);
}

// Track log entries
function trackOperations(operation, prevNumber, result, finalResult) {
	let dataEntery = {
		operation: operation,
		prevNumber: prevNumber,
		enteredNumber: result,
		result: finalResult
	};
	logEntries.push(dataEntery);
	console.log(logEntries);
}

// Addition
function add() {
	const userNumber = getuserNumber();
	const initResult = currentResult;
	currentResult = currentResult + userNumber;
	setUserOutput("+", initResult, userNumber);
	// Get info of operations
	trackOperations("ADDITION", initResult, userNumber, currentResult);
}

// Subtraction
function sub() {
	const userNumber = getuserNumber();
	const initResult = currentResult;
	currentResult = currentResult - userNumber;
	setUserOutput("-", initResult, userNumber);
	// Get info of operations
	trackOperations("SUBTRACTION", initResult, userNumber, currentResult);
}

// Multiplication
function multiply() {
	const userNumber = getuserNumber();
	const initResult = currentResult;
	currentResult = currentResult * userNumber;
	setUserOutput("*", initResult, userNumber);
	trackOperations("MULTIPLICATION", initResult, userNumber, currentResult);
}

// Division
function divide() {
	const userNumber = getuserNumber();
	const initResult = currentResult;
	currentResult = currentResult / userNumber;
	setUserOutput("/", initResult, userNumber);
	trackOperations("DIVISION", initResult, userNumber, currentResult);
}

// Trigger the Buttons
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
