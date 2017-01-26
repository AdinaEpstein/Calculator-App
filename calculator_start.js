var current_input = "0";
var memory = "0";
var operator = 0;
var other_memory = current_input;
var deg = 0;
var rad = 1;

/**
 * Displays the current Input
 */
function displayCurrentInput() {
    document.getElementById('screen').value = current_input;
}

/**
 * Adds a digit
 * @param {string} dig The # that the player inputs
 */
function addDigit(dig) {
    if (current_input.length + 1 > 18) {
        alert("No more than 18 characters");
    }
    if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1)) {
        current_input = dig;
    }
    else {
        current_input = current_input + dig;
    }
    displayCurrentInput();
}

/**
 * Adds a decimal point to the number
 */
function addDecimal() {
    if (current_input.length == 0) {
        //no leading ".", use "0."
        current_input = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (current_input.indexOf(".") == -1) {
            current_input = current_input + ".";
        }
    }
    displayCurrentInput();
}

/**
 * Clears everything
 */
function allClear() {
    current_input = "";
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
    memory = current_input;
    current_input = "";
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
        current_input = eval(memory) * eval(current_input);
    }
    if (operator == 2) {
        if (eval(current_input) == 0) {
            current_input = "undefined";
        }
        else {
            current_input = eval(memory) / eval(current_input);
        }
    }
    if (operator == 3) {
        current_input = eval(memory) + eval(current_input);
    }
    if (operator == 4) {
        current_input = eval(memory) - eval(current_input);
    }
    if (operator == 5 && current_input < 0) {
        var power_of = -1 * eval(current_input);
        var base = eval(memory);
        var final = 1;
        for (i = 0; i < power_of; i++) {
            final = final * base;
            console.log(base + "^" + (i + 1) + " = " + final);
        }
        current_input = 1 / final;
    }
    else if (operator == 5) {
        var power_of = eval(current_input);
        var base = eval(memory);
        var final = 1;
        for (i = 0; i < power_of; i++) {
            final = final * base;
            console.log(base + "^" + (i + 1) + " = " + final);
        }
        current_input = final;
    }
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}

/**
 * Changes the sign of the current input
 */
function changeSign() {
    current_input = -1 * current_input;
    displayCurrentInput();
}

/**
 * Resets the current input to 0
 */
function pleaseClear() {
    current_input = "0";
    console.log("Current input cleared");
    console.log("Operator remains " + operator + " and memory remains " + memory);
    displayCurrentInput();
}

/**
 * Converts the current input into a percentage
 */
function percentage() {
    if (current_input.indexOf("%") == -1) {
        current_input = current_input * 100;
        current_input = current_input.toString() + "%";
    }
    displayCurrentInput();
}

/**
 * Calculates the factorial of the current input
 */
function factorial() {
    var i = "";
    var fact = 1;
    if (current_input < 0) {
        current_input = "undefined";
    }
    else {
        for (i = 1; i <= current_input; i++) {
            fact = fact * iother_memory;
        }
        current_input = fact;
    }
    displayCurrentInput();
}

/**
 * Squares the current input
 */
function square() {
    current_input = current_input * current_input;
    displayCurrentInput();
}

/**
 * Calculates the square root of the current input
 */
function squareRoot() {
    if (current_input == -1) {
        current_input = "i";
    }
    else if (current_input < 0) {
        current_input = Math.sqrt(current_input * -1);
        current_input = current_input.toString() + "i";
    }
    else {
        current_input = Math.sqrt(current_input);
    }
    displayCurrentInput();
}

/**
 * Calculates the inverse of the current input
 */
function inverse() {
    current_input = 1 / current_input;
    displayCurrentInput();
}

/**
 * Takes the sine of the current input
 */
function sin() {
    current_input = Math.sin(current_input);
    displayCurrentInput();
}

/**
 * Takes the cosine of the current input
 */
function cos() {
    current_input = Math.cos(current_input);
    displayCurrentInput();
}

/**
 * Takes the tangent of the current input
 */
function tan() {
    current_input = Math.tan(current_input);
    displayCurrentInput();
}

/**
 * Changes the input from degrees to radians
 */
function toRadian() {
    current_input = current_input * (Math.PI / 180);
    displayCurrentInput();
    console.log("working");
}

/**
 * Changes the input from radians to degrees
 */
function toDegree() {
    current_input = current_input * (180 / Math.PI);
    displayCurrentInput();
}

/**
 * Saves the memory as the current input
 */
function ms() {
    other_memory = current_input;
    console.log(other_memory);
}

/**
 * Recalls the saved memory
 */
function mr() {
    current_input = other_memory;
    displayCurrentInput();
    console.log("memory is " + other_memory);
}

/**
 * Adds the current calc input from the stored memory
 */
function mPlus() {
    other_memory = eval(other_memory) + eval(current_input);
    console.log("memory is " + other_memory);
}

/**
 * Subtracts the current calc input from the stored memory
 */
function mMinus() {
    other_memory = eval(other_memory) - eval(current_input);
}
