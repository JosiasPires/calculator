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
        default:
            result = 'Error';
    }
}

const display = document.querySelector('.result');
const numbers = Array.from(document.querySelectorAll('.num'));
const commands = Array.from(document.querySelectorAll('.opr'));
const clear = document.querySelector('.ac');
const del = document.querySelector('.del');
const calc = document.querySelector('.calc');
let operator;
let numA;
let numB;
let value = '';
let result;

function resetCalc() {
    operator = undefined;
    numA = undefined;
    numB = undefined;
    value = '';
    result = undefined;
    display.textContent = '0';
}

function addNumber() {
    if (numA === undefined && value !== '' && result !== undefined) {
        if (value !== '.') {
            if (this.textContent === '.') {
                value = '0.'
                display.textContent = '0.';
            }
            else {
                if (value !== '0.') {
                    value = '';
                }
            }
        }
        else {
            value = '0.';
        }
    }
    if (!(value.includes('.') && this.textContent === '.')) {
        value += this.textContent;
        if (value === '.') {
            value = '0.'
        }
        display.textContent = value;
    }
}

function setNumAndOpr() {
    if (operator !== undefined && numA !== '' && numB === undefined && value === '') {
        operator = this.textContent;
    }
    if (numA === undefined && numB === undefined && value !== '') {
        operator = this.textContent;
        numA = value;
        value = '';
        display.textContent = '';
    }
    else if (numA !== undefined && numB === undefined && value !== '') {
        calculate();
        if (operator !== this.textContent) {
            operator = this.textContent;
        }
        numA = value;
        value = '';
        numB = undefined;
    }
}

function calculate() {
    if (numA !== undefined && numB === undefined && value !== '') {
        numB = value;
        result = operate(operator, +numA, +numB);
        value = String(result);
        display.textContent = value;
        numA = undefined;
    }
    else if (numA !== undefined && numB !== undefined) {
        numA = numB;
        numB = undefined;
    }
    numB = undefined;
}

function removeLastNum() {
    value = value.slice(0, -1);
    display.textContent = value;
}

clear.addEventListener('click', resetCalc);

numbers.forEach(number => {
    number.addEventListener('click', addNumber)
})

commands.forEach(command => {
    command.addEventListener('click', setNumAndOpr)
})

calc.addEventListener('click', calculate);

del.addEventListener('click', removeLastNum);

window.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
        removeLastNum();
    }
});