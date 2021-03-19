
let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDevide = document.getElementById('buttonDevide');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');


makeOperation = (operationCode => {
	let number1 = +(input1.value);
	let number2 = +(input2.value);
	if (operationCode === '+') {
		result = number1 + number2;
	} else if (operationCode === '-') {
		result = number1 - number2;

	} else if (operationCode === '*') {
		result = number1 * number2;
	} else if (operationCode === '/') {
		result = number1 / number2;
	} else {
		windows.alert('hello');
	}
	window.alert(result);
});

onOperationButtonClick = ((eventObject) => {

	let clickedElement = eventObject.currentTarget;
	let operation = clickedElement.innerHTML;
	makeOperation(operation);
})

buttonPlus.addEventListener('click', onOperationButtonClick);
buttonMinus.addEventListener('click', onOperationButtonClick);
buttonMultiply.addEventListener('click', onOperationButtonClick);
buttonDevide.addEventListener('click', onOperationButtonClick);


