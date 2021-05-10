const charAmountRange = document.getElementById('charAmountRange');
const charAmountNumber = document.getElementById('charAmountNumber');
const form = document.getElementById('passwordGeneratorForm');
const passwordDisplay = document.getElementById('passwordDisplay');
const clipboardEl = document.getElementById('clipboard');
const includeUpperEl = document.getElementById('includeUppercase');
const includeNumEl = document.getElementById('includeNumbers');
const includeSymbEl = document.getElementById('includeSymbols');

//use the ascii char codes to generate the random letters, nums and symbols
const upper_char_codes = arrayFromLowToHigh(65, 90);
const lower_char_codes = arrayFromLowToHigh(97, 122);
const numb_codes = arrayFromLowToHigh(48, 57);
const symb_codes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

//generated an array from the low to high number
function arrayFromLowToHigh(low, high) {
	const array = [];
	for (let i = low; i < high; i++) {
		array.push(i);
	}
	return array;
}

//sync the slider and the number box to show the same
charAmountNumber.addEventListener('input', syncCharAmount);
charAmountRange.addEventListener('input', syncCharAmount);

function syncCharAmount(e) {
	const value = e.target.value;
	charAmountNumber.value = value;
	charAmountRange.value = value;
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const charAmount = charAmountNumber.value;
	const includeUpper = includeUpperEl.checked;
	const includeNum = includeNumEl.checked;
	const includeSymb = includeSymbEl.checked;
	const password = generatePassword(charAmount, includeUpper, includeNum, includeSymb);
	passwordDisplay.innerText = password;
});

//check to see if the tick boxes are ticked, if so add onto the array, push the random character code generated into a new array and convert to the actual char
function generatePassword(charAmount, includeUpper, includeNum, includeSymb) {
	let charCodes = lower_char_codes;
	if (includeUpper) charCodes = charCodes.concat(upper_char_codes);
	if (includeNum) charCodes = charCodes.concat(numb_codes);
	if (includeSymb) charCodes = charCodes.concat(symb_codes);
	const passwordChar = [];
	for (let i = 0; i < charAmount; i++) {
		const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
		passwordChar.push(String.fromCharCode(characterCode));
	}
	return passwordChar.join('');
}

//copy to clipboard
clipboardEl.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = passwordDisplay.innerText;

	if (!password) {
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
});
