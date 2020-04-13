const startGameBtn = document.getElementById("start-game-btn");

// Game Choices
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "PAPER";
const DRAW = "DRAW";
const PLAYER_WINS = "PLAYER_WINS";
const COMPUTER_WINS = "COMPUTER_WINS";
let gameIsRunning = false;

// Get User Choice
const getUserChoice = () => {
	const userChoice = prompt("ROCK, PAPER, SCISSORS", "").toUpperCase();
	if (userChoice !== ROCK && userChoice !== PAPER && userChoice !== SCISSORS) {
		alert(`Invalid Input! defalut is: ${DEFAULT_USER_CHOICE}`);
		return DEFAULT_USER_CHOICE;
	} else {
		return userChoice;
	}
};

// Get Computer Choice
const getComputerChoice = () => {
	const random = Math.random();
	if (random <= 0.3) {
		return ROCK;
	} else if (random <= 0.6) {
		return PAPER;
	} else {
		return SCISSORS;
	}
};

// Determine the winner
const determineWinner = function (playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		console.log(DRAW);
	} else if (
		(playerChoice === PAPER && computerChoice === ROCK) ||
		(playerChoice === SCISSORS && computerChoice === PAPER) ||
		(playerChoice === ROCK && computerChoice === SCISSORS)
	) {
		console.log(PLAYER_WINS);
	} else {
		console.log(COMPUTER_WINS);
	}
};

startGameBtn.addEventListener("click", function () {
	if (gameIsRunning) {
		return;
	}
	console.log("Game is starting...");
	const playerSelection = getUserChoice();
	const computerSelection = getComputerChoice();
	const winner = determineWinner(playerSelection, computerSelection);
});
