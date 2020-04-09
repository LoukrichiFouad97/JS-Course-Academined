/* eslint-disable no-unused-vars */

// Set the Attack Value
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 14;

// Set the health numbers
let fouadLife = 100; // set dynamically by the user
let monsterLife = fouadLife;
let playerLife = fouadLife;

adjustHealthBars(fouadLife);

// handle attacks
function handleAttack(attackMode) {
	let attackStrength;
	if (attackMode === "ATTACK") {
		attackStrength = ATTACK_VALUE;
	} else if (attackMode === "STRONG") {
		attackStrength = STRONG_ATTACK_VALUE;
	}

	// Hit player life
	const monsterDamage = dealMonsterDamage(attackStrength);
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);

	// Update players life on page
	monsterLife -= monsterDamage;
	playerLife -= playerDamage;

	// Determine who is the winner
	if (monsterLife > 0 && playerLife <= 0) {
		console.log("Monster Win!");
	} else if (monsterLife <= 0 && playerLife > 0) {
		console.log("You Win!");
	} else if (monsterLife <= 0 && playerLife <= 0) {
		console.log("You have a draw!");
	}
}

// Normal Attack
function attackHandler() {
	handleAttack("ATTACK");
}

// Strong Attack
function strongAttackHandler() {
	handleAttack("STRONG");
}

// Game Controls Buttons
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
