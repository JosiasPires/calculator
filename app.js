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
    value += this.textContent;
    display.textContent = value;
}

function setNumAndOpr() {
    operator = this.textContent;
    if (numA === undefined && numB === undefined && value !== '') {
        numA = value;
        console.log('Armazenou no A');
        value = '';
        display.textContent = '';
    }
    else if (numA !== undefined && numB === undefined) {
        calculate();
        numA = value;
        value = '';
        numB = undefined;
        // operator = undefined;
    }
}

function calculate() {
    if (numA !== undefined && numB === undefined) {
        numB = value;
        console.log('Armazenou no B e calculou')
        result = operate(operator, +numA, +numB);
        value = String(result);
        display.textContent = value;
        numA = undefined;
    }
    else if (numA !== undefined && numB !== undefined) {
        console.log('passou aqui')
        numA = numB;
        numB = undefined;
    }
    numB = undefined;
}

clear.addEventListener('click', resetCalc);

numbers.forEach(number => {
    number.addEventListener('click', addNumber)
})

commands.forEach(command => {
    command.addEventListener('click', setNumAndOpr)
})

calc.addEventListener('click', calculate);