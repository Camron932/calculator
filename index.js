// Elements

const display = document.getElementById('display');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

const add = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

const equal = document.getElementById('equal');
const clear = document.getElementById('clear');

// Constants and Lets

let firstNum = '';
let secNum = '';

let addRule = false;
let subRule = false;
let multRule = false;
let divRule = false;

// Click functions

one.onclick = function() {
    getNumber("1");
}
two.onclick = function() {
    getNumber("2");
}
three.onclick = function() {
    getNumber("3");
}
four.onclick = function() {
    getNumber("4");
}
five.onclick = function() {
    getNumber("5");
}
six.onclick = function() {
    getNumber("6");
}
seven.onclick = function() {
    getNumber("7");
}
eight.onclick = function() {
    getNumber("8");
}
nine.onclick = function() {
    getNumber("9");
}
zero.onclick = function() {
    getNumber("0");
}

add.addEventListener('click', () => {
    addRule = true;
    subRule = false;
    multRule = false;
    divRule = false;
        return addRule, subRule, multRule, divRule;
});
minus.addEventListener('click', () => {
    addRule = false;
    subRule = true;
    multRule = false;
    divRule = false;
        return addRule, subRule, multRule, divRule;
});
multiply.addEventListener('click', () => {
    addRule = false;
    subRule = false;
    multRule = true;
    divRule = false;
        return addRule, subRule, multRule, divRule;
});
divide.addEventListener('click', () => {
    addRule = false;
    subRule = false;
    multRule = false;
    divRule = true;
        return addRule, subRule, multRule, divRule;
});

function getNumber(num) {
    if (addRule === false && subRule === false && multRule === false && divRule === false) {
        firstNum = firstNum + num;
        display.innerHTML = `${firstNum}`;
        return firstNum;
    } else if (addRule === true || subRule === true || multRule === true || divRule === true)
        secNum = secNum + num;
        display.innerHTML = `${secNum}`;
        return secNum;
};

display.innerHTML = 0;

// Basic functions

function addNum() {
    let sum = parseInt(firstNum) + parseInt(secNum);
    firstNum = sum;
    return firstNum;
}
function subtractNum() {
    let sum = parseInt(firstNum) - parseInt(secNum);
    firstNum = sum;
    return firstNum;
}
function multiplyNum() {
    let sum = parseInt(firstNum) * parseInt(secNum);
    firstNum = sum;
    return firstNum;
}
function divideNum() {
    let sum = parseInt(firstNum) / parseInt(secNum);
    firstNum = sum;
    return firstNum;
}

equal.addEventListener('click', () => {
    if (addRule === true || subRule === true || multRule === true || divRule === true) {
        operate();
        display.innerHTML = `${firstNum}`
        secNum = '';
    }
});
clear.addEventListener('click', () => {
    firstNum = '';
    secNum = '';

    addRule = false;
    subRule = false;
    multRule = false;
    divRule = false;

    display.innerHTML = 0;
        return firstNum, secNum, addRule, subRule, multRule, divRule;
});

// Main functions

function operate() {
    if (addRule === true) {
        addNum();
    } else if (subRule === true) {
        subtractNum();
    } else if (multRule === true) {
        multiplyNum();
    } else if (divRule ===true) {
        divideNum();
    }
};
