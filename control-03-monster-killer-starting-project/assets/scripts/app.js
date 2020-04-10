/* eslint-disable no-unused-vars */

// Set the Attack Value
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 25;
const MODE_ATTACK = "ATTACK";
const MODE_STRING_ATTACK = "STRONG";

// Game Events
const LOG_EVENT_PLAYER_ATTACK = "ATTACK";
const LOG_EVENT_STRONG_PLAYER_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER";
const LOG_EVENT_GAME_OVER = "GAME_OVER";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";

// Set the health numbers
const userNumber = prompt("Max life for you and monster", "100");
let fullLife = Number(userNumber);
let monsterLife;
let playerLife;

if (isNaN(fullLife) || fullLife <= 20 || fullLife >= 100) {
	fullLife = 100;
	console.log(
		"not valid value!  max life should be between 20 - 100. default 100"
	);
}

monsterLife = fullLife;
playerLife = fullLife;
let hasBonusLife = true;

adjustHealthBars(fullLife);

// Reseting Game
function reset() {
	monsterLife = fullLife;
	playerLife = fullLife;
	resetGame(fullLife);
}

// Monster hit
function monsterHit() {
	const newPlayerLife = playerLife;
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	playerLife -= playerDamage;
	logScores(LOG_EVENT_MONSTER_ATTACK, playerDamage, monsterLife, playerLife);

	// Using bonus life
	if (playerLife <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		playerLife = newPlayerLife;
		setPlayerHealth(newPlayerLife);
		console.log("bonus life has saved your life");
	}

	// Determine who is the winner
	if (monsterLife > 0 && playerLife <= 0) {
		console.log("Monster Win!");
		logScores(LOG_EVENT_GAME_OVER, "monster Win", monsterLife, playerLife);
	} else if (monsterLife <= 0 && playerLife > 0) {
		console.log("You Win!");
		logScores(LOG_EVENT_GAME_OVER, "You Win", monsterLife, playerLife);
	} else if (monsterLife <= 0 && playerLife <= 0) {
		console.log("You have a draw!");
		logScores(LOG_EVENT_GAME_OVER, "It is a draw", monsterLife, playerLife);
	}

	// Reseting game
	if (monsterLife <= 0 || playerLife <= 0) {
		reset();
	}
}

let logEntries = [];

function logScores(event, value, monsterLife, playerLife) {
	let gameInfo;
	if (event === LOG_EVENT_PLAYER_ATTACK) {
		gameInfo = {
			event: event,
			value: value,
			monsterLife: monsterLife,
			playerLife: playerLife,
			target: "monster"
		};
	} else if (event === LOG_EVENT_STRONG_PLAYER_ATTACK) {
		gameInfo = {
			event: event,
			value: value,
			monsterLife: monsterLife,
			playerLife: playerLife,
			target: "monster"
		};
	} else if (event === LOG_EVENT_MONSTER_ATTACK) {
		gameInfo = {
			event: event,
			value: value,
			monsterLife: monsterLife,
			playerLife: playerLife,
			target: "player"
		};
	} else if (event === LOG_EVENT_GAME_OVER) {
		gameInfo = {
			event: event,
			value: value,
			monsterLife: monsterLife,
			playerLife: playerLife
		};
	}

	logEntries.push(gameInfo);
}

// handle attacks
function handleAttack(attackMode) {
	const attackStrength =
		attackMode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
	const eventPlayer =
		attackMode === MODE_ATTACK
			? LOG_EVENT_PLAYER_ATTACK
			: LOG_EVENT_STRONG_PLAYER_ATTACK;

	// if (attackMode === MODE_ATTACK) {
	// 	attackStrength = ATTACK_VALUE;
	// 	eventPlayer = LOG_EVENT_PLAYER_ATTACK;
	// } else if (attackMode === MODE_STRING_ATTACK) {
	// 	attackStrength = STRONG_ATTACK_VALUE;
	// 	eventPlayer = LOG_EVENT_STRONG_PLAYER_ATTACK;
	// }

	const monsterDamage = dealMonsterDamage(attackStrength);
	monsterLife -= monsterDamage;
	monsterHit();
	logScores(eventPlayer, monsterDamage, monsterLife, playerLife);
}

// Normal Attack
function attackHandler() {
	handleAttack(MODE_ATTACK);
}

// Strong Attack
function strongAttackHandler() {
	handleAttack(MODE_STRING_ATTACK);
}

// Heal the player
function healPlayer() {
	increasePlayerHealth(HEAL_VALUE);
	if (playerLife === 100) {
		return;
	} else {
		let healValue;
		if (playerLife >= fullLife - HEAL_VALUE) {
			console.log(`you can't heal more then ${fullLife}`);
			healValue = fullLife - playerLife;
		} else {
			console.log("you are below 80");
			healValue = HEAL_VALUE;
		}
		playerLife += HEAL_VALUE;
		monsterHit();
		logScores(LOG_EVENT_PLAYER_HEAL, "HEAL", monsterLife, playerLife);
	}
}

function logBattle() {
	console.log(logEntries);
}

// Game Controls Buttons
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayer);
logBtn.addEventListener("click", logBattle);
