'use strict';

let generateBtn = document.querySelector('#generate');

const randomNum = () => {
	const min = document.querySelector('#min');
	const max = document.querySelector('#max');
	let minValue = Number(min.value);
	let maxValue = Number(max.value);
	if (minValue > maxValue) {
		minValue = maxValue + minValue;
		maxValue = minValue - maxValue;
		minValue = minValue - maxValue;
		min.value = minValue;
		max.value = maxValue;
	}
	const num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

	document.querySelector('#result').textContent = num;
}

randomNum();

generateBtn.addEventListener('click', randomNum);