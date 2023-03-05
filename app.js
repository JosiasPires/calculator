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
let Operator;
let numA;
let numB;
let value = '';
let result;

