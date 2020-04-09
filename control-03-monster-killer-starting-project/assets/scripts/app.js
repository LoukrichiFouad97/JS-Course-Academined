/* eslint-disable no-unused-vars */

// Set the Attack Value
const ATTACK_VALUE = 20;

// Set the health numbers
let fouadLife = 100; // set dynamically by the user
let monsterLife = fouadLife;
let playerLife = fouadLife;

adjustHealthBars(fouadLife);

function attackHandler() {
	const monsterDamage = dealMonsterDamage(ATTACK_VALUE);
	monsterLife -= monsterDamage;
	if (monsterLife <= 0) {
		console.log("dadasd");
	}
}
attackBtn.addEventListener("click", attackHandler);
