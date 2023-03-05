function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(opr, a, b) {
    switch (opr) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        case 'AC':
            return;
        default:
            result = 'Error';
    }
}

const display = document.querySelector('.result');
const numbers = Array.from(document.querySelectorAll('.num'));
const commands = Array.from(document.querySelectorAll('.opr'));
const calc = document.querySelector('.calc');
let operator;
let numA;
let numB;
let value = '';
let result;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (!(value.includes('.') && number.textContent === '.')) {
            value += number.textContent;
            display.textContent = value;
        }
        if ((value === '' || value === '0') && number.textContent === '.') {
            value = '0.';
            display.textContent = value;
        }
    })
})

commands.forEach(command => {
    command.addEventListener('click', () => {
        operator = command.textContent;
        if (operator === 'AC') {
            numA = 0;
            numB = 0;
            result = 0;
            display.textContent = 0;
        }
        if (typeof numA === 'number') {
            numB = 0 + Number(value);
            result = operate(operator, numA, numB);
            numA = result;
            display.textContent = result;            
        }
        if (typeof result === 'number') {
            numA = result;
        }
        else {
            numA = Number(value);
        }
        value = '';
    })
})

calc.addEventListener('click', () => {
    numB = 0 + Number(value);
    result = operate(operator, numA, numB);
    numA = result;
    display.textContent = result;
})