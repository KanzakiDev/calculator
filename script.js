let currentDisplay = '';
let firstNumber = '';
let operator = '';

// Basic display 
function displayValue(value) {
    const display = document.querySelector('.display');
    display.textContent = value;
}
function pressNumber(num) {
    if (num === '.' && currentDisplay.includes('.')) return;
    currentDisplay += num;        
    displayValue(currentDisplay); 
}

function clearDisplay() {
    currentDisplay = '';
    firstNumber = '';
    operator = '';
    displayValue('0');
}

function calculate() {
    let result;
    const secondNumber = parseFloat(currentDisplay);
    const firstNum = parseFloat(firstNumber);

    switch (operator) {
        case 'add':
            result = firstNum + secondNumber;
            break;
        case 'subtract':
            result = firstNum - secondNumber;
            break;
        case 'multiplication':
            result = firstNum * secondNumber;
            break;
        case 'divide':
            result = firstNum / secondNumber;
            break;
        case 'percent':
            result = firstNum % secondNumber;
            break;
        default:
            return;
        }
    displayValue(result);
    currentDisplay = result.toString();
    firstNumber = '';
    operator = '';
    }

function pressOperator(op) {
    firstNumber = currentDisplay; 
    operator = op;                
    currentDisplay = '';         
}

function deleteLast() {
    currentDisplay = currentDisplay.slice(0, -1);
    displayValue(currentDisplay || '0'); 
}  