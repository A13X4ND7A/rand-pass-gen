const charAmountRange = document.getElementById('charAmountRange');
const charAmountNumber = document.getElementById('charAmountNumber');

charAmountNumber.addEventListener('input', syncCharAmount);
charAmountRange.addEventListener('input', syncCharAmount);

function syncCharAmount(e) {
	const value = e.target.value;
	charAmountNumber.value = value;
	charAmountRange.value = value;
}
