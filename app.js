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
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Error'
    }
}

const display = document.querySelector('.result');
const numbers = Array.from(document.querySelectorAll('.num'));
let value = '';

numbers.forEach(number => {
    number.addEventListener('click', () => {
        value += number.textContent;
        display.textContent = value;

    })
})
