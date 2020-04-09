/* eslint-disable no-unused-vars */

// Set the Attack Value
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 25;

// Set the health numbers
let fullLife = 100; // set dynamically by the user
let monsterLife = fullLife;
let playerLife = fullLife;
let hasBonusLife = true;

adjustHealthBars(fullLife);

// monster hit
function monsterHit() {
	const newPlayerLife = playerLife;
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	playerLife -= playerDamage;

	if (playerLife <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		playerLife = newPlayerLife;
		setPlayerHealth(newPlayerLife);
		console.log('bonus life has saved your life');
		
	}

	// Determine who is the winner
	if (monsterLife > 0 && playerLife <= 0) {
		console.log("Monster Win!");
	} else if (monsterLife <= 0 && playerLife > 0) {
		console.log("You Win!");
	} else if (monsterLife <= 0 && playerLife <= 0) {
		console.log("You have a draw!");
	}
}

// handle attacks
function handleAttack(attackMode) {
	let attackStrength;
	if (attackMode === "ATTACK") {
		attackStrength = ATTACK_VALUE;
	} else if (attackMode === "STRONG") {
		attackStrength = STRONG_ATTACK_VALUE;
	}

	const monsterDamage = dealMonsterDamage(attackStrength);
	monsterLife -= monsterDamage;

	monsterHit();
}

// Normal Attack
function attackHandler() {
	handleAttack("ATTACK");
}

// Strong Attack
function strongAttackHandler() {
	handleAttack("STRONG");
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
