var currentInput = "0";
var memory = "0";
var operator = 0;
var otherMemory = currentInput;
var deg = 0;
var rad = 1;

/**
 * Displays the current Input
 */
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}

/**
 * Adds a digit
 * @param {string} dig The # that the player inputs
 */
function addDigit(dig) {
    if (currentInput.length + 1 > 18) {
        alert("No more than 18 characters");
    }
    if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
        currentInput = dig;
    }
    else {
        currentInput = currentInput + dig;
    }
    displayCurrentInput();
}

/**
 * Adds a decimal point to the number
 */
function addDecimal() {
    if (currentInput.length == 0) {
        //no leading ".", use "0."
        currentInput = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}

/**
 * Clears everything
 */
function allClear() {
    currentInput = "";
    console.log("Current input cleared");
    operator = 0; //clear operator
    console.log("Operator cleared");
    memory = "0"; //clear memory
    console.log("Memory cleared");
    displayCurrentInput();
}

/**
 * Stores the last operator pushed for multiply, divide, add or subtract
 * @param {string} op passes string from the html to store operator
 */
function storeOperator(op) {
    if (op.indexOf("*") > -1) {
        operator = 1;
    }
    if (op.indexOf("/") > -1) {
        operator = 2;
    }
    if (op.indexOf("+") > -1) {
        operator = 3;
    }
    if (op.indexOf("-") > -1) {
        operator = 4;
    }
    if (op.indexOf("^") > -1) {
        operator = 5;
    }

    memory = currentInput;
    currentInput = "";
    displayCurrentInput();
    console.log(op);
    console.log(operator);
    console.log(memory);
}

/**
 * Calculate using the operator, the memery and the current input
 */
function calculate() {
    if (operator == 1) {
        currentInput = eval(memory) * eval(currentInput);
    }
    if (operator == 2) {
        if (eval(currentInput) == 0) {
            currentInput = "undefined";
        }
        else {
            currentInput = eval(memory) / eval(currentInput);
        }
    }
    if (operator == 3) {
        currentInput = eval(memory) + eval(currentInput);
    }
    if (operator == 4) {
        currentInput = eval(memory) - eval(currentInput);
    }
    if (operator == 5 && currentInput < 0) {
        var powerOf = -1 * eval(currentInput);
        var base = eval(memory);
        var final = 1;
        for (i = 0; i < powerOf; i++) {
            final = final * base;
            console.log(base + "^" + (i + 1) + " = " + final);
        }
        currentInput = 1 / final;
    }
    else if (operator == 5) {
        var powerOf = eval(currentInput);
        var base = eval(memory);
        var final = 1;
        for (i = 0; i < powerOf; i++) {
            final = final * base;
            console.log(base + "^" + (i + 1) + " = " + final);
        }
        currentInput = final;
    }
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}

/**
 * Changes the sign of the current input
 */
function changeSign() {
    currentInput = -1 * currentInput;
    displayCurrentInput();
}

/**
 * Resets the current input to 0
 */
function pleaseClear() {
    currentInput = "0";
    console.log("Current input cleared");
    console.log("Operator remains " + operator + " and memory remains " + memory);
    displayCurrentInput();
}

/**
 * Converts the current input into a percentage
 */
function percentage() {
    if (currentInput.indexOf("%") == -1) {
        currentInput = currentInput * 100;
        currentInput = currentInput.toString() + "%";
    }
    displayCurrentInput();
}

/**
 * Calculates the factorial of the current input
 */
function factorial() {
    var i = "";
    var fact = 1;
    if (currentInput < 0) {
        currentInput = "undefined";
    }
    else {
        for (i = 1; i <= currentInput; i++) {
            fact = fact * i;
        }
        currentInput = fact;
    }
    displayCurrentInput();
}

/**
 * Squares the current input
 */
function square() {
    currentInput = currentInput * currentInput;
    displayCurrentInput();
}

/**
 * Calculates the square root of the current input
 */
function squareRoot() {
    if (currentInput == -1) {
        currentInput = "i";
    }
    else if (currentInput < 0) {
        currentInput = Math.sqrt(currentInput * -1);
        currentInput = currentInput.toString() + "i";
    }
    else {
        currentInput = Math.sqrt(currentInput);
    }
    displayCurrentInput();
}

/**
 * Calculates the inverse of the current input
 */
function inverse() {
    currentInput = 1 / currentInput;
    displayCurrentInput();
}

/**
 * Takes the sine of the current input
 */
function sin() {
    currentInput = Math.sin(currentInput);
    displayCurrentInput();
}

/**
 * Takes the cosine of the current input
 */
function cos() {
    currentInput = Math.cos(currentInput);
    displayCurrentInput();
}

/**
 * Takes the tangent of the current input
 */
function tan() {
    currentInput = Math.tan(currentInput);
    displayCurrentInput();
}

/**
 * Changes the input from degrees to radians
 */
function toRadian() {
    currentInput = currentInput * (Math.PI / 180);
    displayCurrentInput();
    console.log("working");
}

/**
 * Changes the input from radians to degrees
 */
function toDegree() {
    currentInput = currentInput * (180 / Math.PI);
    displayCurrentInput();
}

/**
 * Saves the memory as the current input
 */
function ms() {
    otherMemory = currentInput;
    console.log(otherMemory);
}

/**
 * Recalls the saved memory
 */
function mr() {
    currentInput = otherMemory;
    displayCurrentInput();
    console.log("memory is " + otherMemory);
}

/**
 * Adds the current calc input from the stored memory
 */
function mPlus() {
    otherMemory = eval(otherMemory) + eval(currentInput);
    console.log("memory is " + otherMemory);
}

/**
 * Subtracts the current calc input from the stored memory
 */
function mMinus() {
    otherMemory = eval(otherMemory) - eval(currentInput);
}
