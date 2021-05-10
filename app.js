const charAmountRange = document.getElementById('charAmountRange');
const charAmountNumber = document.getElementById('charAmountNumber');
const form = document.getElementById('passwordGeneratorForm');
const includeUpperEl = document.getElementById('includeUppercase');
const includeNumEl = document.getElementById('includeNumbers');
const includeSymbEl = document.getElementById('includeSymbols');

//sync the slider and the number box to show the same
charAmountNumber.addEventListener('input', syncCharAmount);
charAmountRange.addEventListener('input', syncCharAmount);

function syncCharAmount(e) {
	const value = e.target.value;
	charAmountNumber.value = value;
	charAmountRange.value = value;
}

form.addEventListener('submit', (e) => {
	e.preventDefault.default();
	const charAmount = charAmountNumber.value;
	const includeUpper = includeUpperEl.checked;
	const includeNum = includeNumEl.checked;
	const includeSymb = includeSymbEl.checked;

	const password = generatePassword(charAmount, includeUpper, includeNum, includeSymb);
});

function arrayFromLowToHigh(low, high) {
	for (let i = low; i < high; i++) {
		array.push(i);
	}
	return array;
}

//use the ascii char codes to generate the random letters, nums and symbols
function generatePassword(charAmount, includeUpper, includeNum, includeSymb) {}
