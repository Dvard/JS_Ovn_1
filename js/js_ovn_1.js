console.log('Detta är uppgift 1');

const hej = 'Hej på dig!';
console.log(hej);

const heltal = 3;
console.log(heltal);

const decimaltal = 2.3;
console.log(decimaltal);

const divide = heltal / decimaltal;
console.log(divide);
console.log(heltal + ' / ' + decimaltal + ' = ' +  divide);

const myclass = 'dhg19',
		myschool = 'Prakticum';
const message = 'Hej jag går på ' + myclass + ' i ' + myschool;
document.querySelector('#uppg7').innerHTML = message;

document.querySelector('#uppg8').innerHTML = 'divisionen är ' + divide;

const calculation = Math.ceil((3*4.765) / 2);
document.querySelector('#uppg9').innerHTML = String(calculation);

function alert_open() {
	alert('Vilken fin knapp!');
}

function alert_with_var_text() {
	alert(hej);
}

