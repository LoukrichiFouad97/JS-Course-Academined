const func = function (numbers) {
	let sum = 0;
	for (const number of numbers) {
		sum += number;
	}
	console.log(sum);
};

const btn = document.getElementById("tests");
btn.addEventListener("click", func.bind(this, [10, 52, 232, 56]));
