/* eslint-disable no-unused-vars */

// Set the Attack Value
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 25;
const MODE_ATTACK = "ATTACK";
const MODE_STRING_ATTACK = "STRONG"

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

	// Using the bonus life
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
	} else if (monsterLife <= 0 && playerLife > 0) {
		console.log("You Win!");
	} else if (monsterLife <= 0 && playerLife <= 0) {
		console.log("You have a draw!");
	}

	// Reseting game
	if (monsterLife <= 0 || playerLife <= 0) {
		reset();
	}
}

function log() {
	console.log(monsterLife, playerLife);
	
}

// handle attacks
function handleAttack(attackMode) {
	let attackStrength;
	if (attackMode === MODE_ATTACK) {
		attackStrength = ATTACK_VALUE;
	} else if (attackMode === MODE_STRING_ATTACK) {
		attackStrength = STRONG_ATTACK_VALUE;
	}

	const monsterDamage = dealMonsterDamage(attackStrength);
	monsterLife -= monsterDamage;
	monsterHit();

	// Log every thing 
	log();
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
	}
}

// Game Controls Buttons
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayer);
