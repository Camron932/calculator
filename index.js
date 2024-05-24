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
const deci = document.getElementById('deci');

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
deci.onclick = function() {
    decimal()
}

addEventListener('keypress', (e) => {
    if (e.code == "Digit1") {
        getNumber("1");
    } else if (e.code == "Digit2") {
        getNumber("2");
    } else if (e.code == "Digit3") {
        getNumber("3");
    } else if (e.code == "Digit4") {
        getNumber("4");
    } else if (e.code == "Digit5") {
        getNumber("5");
    } else if (e.code == "Digit6") {
        getNumber("6");
    } else if (e.code == "Digit7") {
        getNumber("7");
    } else if (e.code == "Digit8" && e.shiftKey == false) {
        getNumber("8");
    } else if (e.code == "Digit9") {
        getNumber("9");
    } else if (e.code == "Digit0") {
        getNumber("0");
    } else if (e.code == "Minus") {
        addRule = false;
        subRule = true;
        multRule = false;
        divRule = false;
            return addRule, subRule, multRule, divRule;
    } else if (e.code == "Equal" && e.shiftKey == true) {
        addRule = true;
        subRule = false;
        multRule = false;
        divRule = false;
            return addRule, subRule, multRule, divRule;
    } else if (e.code == "Digit8" && e.shiftKey == true) {
        addRule = false;
        subRule = false;
        multRule = true;
        divRule = false;
            return addRule, subRule, multRule, divRule;
    } else if (e.code == "Slash") {
        addRule = false;
        subRule = false;
        multRule = false;
        divRule = true;
            return addRule, subRule, multRule, divRule;
    } else if (e.code == "Equal" || e.code == "Enter") {
        if (secNum === '') {
            display.innerHTML = `${firstNum}`
        } else if (addRule === true || subRule === true || multRule === true || divRule === true) {
            operate();
            display.innerHTML = `${firstNum}`
            secNum = '';
        }
    } else if (e.code == "KeyC") {
        firstNum = '';
        secNum = '';

        addRule = false;
        subRule = false;
        multRule = false;
        divRule = false;

        display.innerHTML = 0;
            return firstNum, secNum, addRule, subRule, multRule, divRule;
    } else if (e.code == "Period") {
        decimal();
    }
});


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

function decimal() {
    if (firstNum.includes(".") == true 
    && addRule === false 
    && subRule === false 
    && multRule === false 
    && divRule === false) {
        display.innerHTML = `${firstNum}`;
    } else if (secNum.includes(".") == true 
    && (addRule === true 
    || subRule === true 
    || multRule === true 
    || divRule === true)) {
        display.innerHTML = `${secNum}`;
    } else if (firstNum.includes(".") == false
    && addRule === false 
    && subRule === false 
    && multRule === false 
    && divRule === false) {
        firstNum = firstNum + ".";
        display.innerHTML = `${firstNum}`;
        return firstNum;
    } else { 
        secNum = secNum + ".";
        display.innerHTML = `${secNum}`;
        return secNum;
    }
};

function getNumber(num) {
    if (addRule === false && subRule === false && multRule === false && divRule === false) {
        firstNum = firstNum + num;
        display.innerHTML = `${firstNum}`;
        return firstNum;
    } else if (addRule === true || subRule === true || multRule === true || divRule === true) {
        secNum = secNum + num;
        display.innerHTML = `${secNum}`;
        return secNum;
    }
};

display.innerHTML = 0;

// Basic functions

function addNum() {
    let sum = parseFloat(firstNum) + parseFloat(secNum);
    firstNum = sum.toString();
    return firstNum;
}
function subtractNum() {
    let sum = parseFloat(firstNum) - parseFloat(secNum);
    firstNum = sum.toString();
    return firstNum;
}
function multiplyNum() {
    let sum = parseFloat(firstNum) * parseFloat(secNum);
    firstNum = sum.toString();
    return firstNum;
}
function divideNum() {
    let sum = parseFloat(firstNum) / parseFloat(secNum);
    firstNum = sum.toString();
    return firstNum;
}

equal.addEventListener('click', () => {
    if (secNum === '') {
        display.innerHTML = `${firstNum}`
    } else if (addRule === true || subRule === true || multRule === true || divRule === true) {
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
