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
        if (typeof numA === 'number') {
            value = '';
        }
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
            numA = undefined;
            numB = undefined;
            value = '';
            result = undefined;
            display.textContent = 0;
        }
        else {
            if (operator === 'DEL') {
                console.log(value);
            }
            else {
                if (typeof numA === 'number' && operator !== undefined && value !== '') {
                    numB = Number(value);
                    console.log('armazenou no B')
                    result = operate(operator, numA, numB);
                    numA = result;
                    display.textContent = result;
                    value = '';
                    numB = undefined;  
                    console.log('calculando a partir do operador'); 
                }
                if (typeof result === 'number') {
                    numA = result;
                    console.log('typeof result = number');
                    console.log('o result é' + result);
                }
                else {
                    if (value !== '') {
                        numA = Number(value);
                        console.log('armazenou no A');
                        value = '';
                    }
                }
            }
        }
        // value = '';
    })
})

calc.addEventListener('click', () => {
    if (operator !== undefined) {
        numB = Number(value);
        result = operate(operator, numA, numB);
        numA = value;
        display.textContent = result;
        value = String(result);
        operator = undefined;
        // numA = undefined;
        numB = undefined;
        result = undefined;
        console.log('jogou o resultado');
    }
})