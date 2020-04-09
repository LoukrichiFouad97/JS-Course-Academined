/* eslint-disable no-unused-vars */
// Health Bars
const monsterHealthBar = document.getElementById("monster-health");
const playerHealthBar = document.getElementById("player-health");
const bonusLife = document.getElementById("bonus-life");

// Control Buttons
const attackBtn = document.getElementById("attack-btn");
const strongAttackBtn = document.getElementById("strong-attack-btn");
const healBtn = document.getElementById("heal-btn");
const logBtn = document.getElementById("log-btn");

// Set health bars
function modifyHealthBars(lifeBar) {
	monsterHealthBar.value = lifeBar;
	monsterHealthBar.max = lifeBar;
	playerHealthBar.value = lifeBar;
	playerHealthBar.max = lifeBar;
}

// Deal damage to moster
function dealDamageToMonster(damage) {
	const dealDamage = Math.random() * damage;
	monsterHealthBar.value = Number(monsterHealthBar.value) - dealDamage;
	return monsterHealthBar;
}

// Deal damage to player
function dealDamageToPlayer(damage) {
	const dealDamage = Math.random() * damage;
	playerHealthBar.value = Number(playerHealthBar.value) - dealDamage;
	return playerHealthBar;
}

// Incease Player Health
function increasePlayerHealth(incHealth) {
  playerHealthBar.value = parseInt(playerHealthBar.value) + incHealth;
}

// Generate new Game
function resetGame(reset) {
  monsterHealthBar.value = reset;
  playerHealthBar.value = reset;
}

// Remve Bonus life 
function removeBonusLife() {
  bonusLife.parentElement.removeChild('bonus-life');
}

// Set player Health
function setPlayerHealth(healthValue) {
  playerHealthBar.value = healthValue;
}