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
	return Number(userInput.value);
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

const calcActions = document.getElementById("calc-actions");
calcActions.addEventListener("click", function handleMathOperator(mathBtn) {
	const btnContent = mathBtn.target.textContent;
	if (btnContent.length > 1) {
		return;
	} else {
		handleMathBtns(btnContent);
	}
});

// handle math buttons
function handleMathBtns(mathOperator) {
	try {
		if (mathOperator === "+" || mathOperator === "add") {
			refactor("+");
		} else if (mathOperator === "-" || mathOperator === "sub") {
			refactor("-");
		} else if (mathOperator === "*" || mathOperator === "multiply") {
			refactor("*");
		} else if (mathOperator === "/" || mathOperator === "devide") {
			refactor("/");
		}
	} catch (error) {
		alert(`that's not a math operator!!! ${error}`);
	}
}

// Handle math function
function refactor(operator) {
	const userNumber = getuserNumber();
	const initResult = currentResult;
	let mathOperators;
	switch (operator) {
		case "/":
			// prevent 0 division
			if (userNumber) {
				mathOperators = "Divsion";
				currentResult /= userNumber;
			} else {
				return;
			}
			break;
		case "+":
			mathOperators = "Add";
			currentResult += userNumber;
			break;
		case "-":
			mathOperators = "Subtract";
			currentResult -= userNumber;
			break;
		case "*":
			mathOperators = "Muliply";
			currentResult *= userNumber;
			break;
		default:
			return;
	}
	trackOperations(mathOperators, initResult, userNumber, currentResult);
	setUserOutput(operator, initResult, userNumber);
}
