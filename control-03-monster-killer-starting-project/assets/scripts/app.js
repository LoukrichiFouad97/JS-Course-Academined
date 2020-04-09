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

function attackHandler() {
	const monsterDamage = dealMonsterDamage(ATTACK_VALUE);
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	monsterLife -= monsterDamage;
	playerLife -= playerDamage;
	if (monsterLife <= 0 && playerLife > 0) {
		console.log("monster loose");
	} else if (monsterLife > 0 && playerLife <= 0) {
		console.log("player loose");
	} else if (monsterLife <= 0 && playerLife <= 0) {
		console.log("you have a draw!");
	}
}

function strongAttackHandler() {
	// Hit player life
	const monsterDamage = dealMonsterDamage(STRONG_ATTACK_VALUE);
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

// Game Controls Buttons
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
