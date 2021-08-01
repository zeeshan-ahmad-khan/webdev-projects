const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const result = document.querySelector(".result");
const display = document.querySelector(".display");
const output = document.querySelector(".output");
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const scientific = document.querySelectorAll(".scientific");
const deg = document.querySelector(".deg");
const rad = document.querySelector(".rad");
// const div = document.querySelectorAll("div");

let expression = "";
let expArr = [];

function displayNum() {

    nums.forEach((num) => {

        num.addEventListener('click', () => {

            expression += num.textContent;
            display.innerHTML = expression;
            console.log(expression);
        });
    });
}

function DisplayOp() {

    operators.forEach((operator) => {

        operator.addEventListener('click', () => {

            if (operator.textContent == "^") {
                expression += "**";
            } else {
                expression += operator.textContent;
            }
            display.innerHTML = expression;
            console.log(expression);
        });
    });
}

result.addEventListener('click', () => {

    try {
        output.style.color = "white";
        let answer = eval(expression);
        output.innerHTML = answer;
        expression = answer;
        console.log(expression);
    } catch {
        output.innerHTML = "ERROR";
        output.style.color = "#fc3939";
    }
});

function clearAll() {
    clear.addEventListener('click', () => {

        expression = "";
        display.innerHTML = expression;
        output.innerHTML = "";
    });
}

function deleteLast() {

    del.addEventListener('click', () => {

        expression = expression.slice(0, -1);
        display.innerHTML = expression;
    });
}

function scientificCalc() {

    scientific.forEach((s) => {

        s.addEventListener('click', (e) => {

            const target = e.target.textContent;

            if (target == "cos") {

                let lastEle, value;
                if (isNaN(expression)) {
                    lastEle = convertToArray().pop();
                    value = Math.cos(toDegreeOrRadian(lastEle));
                    expression = expression.replace(lastEle, value);
                } else {
                    lastEle = expression;
                    value = Math.cos(toDegreeOrRadian(lastEle));
                    expression = value;
                }
                display.innerHTML = expression;
            }

            if (target == "sin") {

                let lastEle, value;
                if (isNaN(expression)) {
                    lastEle = convertToArray().pop();
                    value = Math.sin(toDegreeOrRadian(lastEle));
                    expression = expression.replace(lastEle, value);
                } else {
                    lastEle = expression;
                    value = Math.sin(toDegreeOrRadian(lastEle));
                    expression = value;
                }
                display.innerHTML = expression;
            }

            if (target == "tan") {

                let lastEle, value;
                if (isNaN(expression)) {
                    lastEle = convertToArray().pop();
                    value = Math.tan(toDegreeOrRadian(lastEle));
                    expression = expression.replace(lastEle, value);
                } else {
                    lastEle = expression;
                    value = Math.tan(toDegreeOrRadian(lastEle));
                    expression = value;
                }
                display.innerHTML = expression;
            }

            if (target == "log") {

                let lastEle, value;
                if (isNaN(expression)) {
                    lastEle = convertToArray().pop();
                    value = Math.log10(lastEle);
                    expression = expression.replace(lastEle, value);
                } else {
                    lastEle = expression;
                    value = Math.log10(lastEle);
                    expression = value;
                }
                display.innerHTML = expression;
            }

            if (target == "ln") {

                let lastEle, value;
                if (isNaN(expression)) {
                    lastEle = convertToArray().pop();
                    value = Math.log(lastEle);
                    expression = expression.replace(lastEle, value);
                } else {
                    lastEle = expression;
                    value = Math.log(lastEle);
                    expression = value;
                }
                display.innerHTML = expression;
            }

            if (target == "PI") {

                expression += Math.PI;
                display.innerHTML = expression;
            }

            if (target == "e") {

                expression += Math.E;
                display.innerHTML = expression;
            }

            if (target == "SQRT") {

                let lastEle, value;
                if (isNaN(expression)) {
                    lastEle = convertToArray().pop();
                    value = Math.sqrt(lastEle);
                    expression = expression.replace(lastEle, value);
                } else {
                    lastEle = expression;
                    value = Math.sqrt(lastEle);
                    expression = value;
                }
                display.innerHTML = expression;
            }

            if (target == "x!") {

                let lastEle, value;
                if (isNaN(expression)) {
                    lastEle = convertToArray().pop();
                    value = factorial(lastEle);
                    expression = expression.replace(lastEle, value);
                } else {
                    lastEle = expression;
                    value = factorial(lastEle);
                    expression = value;
                }
                display.innerHTML = expression;
            }

            if (target == "1/x") {

                let lastEle, value;
                if (isNaN(expression)) {
                    lastEle = convertToArray().pop();
                    value = 1 / lastEle;
                    expression = expression.replace(lastEle, value);
                } else {
                    lastEle = expression;
                    value = 1 / lastEle;
                    expression = value;
                }
                display.innerHTML = expression;
            }

            if (target == "+/-") {

                let lastEle, value;
                if (isNaN(expression)) {
                    lastEle = convertToArray().pop();
                    expression = expression.replace(lastEle, value);
                } else {
                    lastEle = expression;
                    value = signChange(lastEle);
                    expression = value;
                }
                display.innerHTML = expression;
            }
        })
    });
}

function convertToArray() {

    return expression.split(/[(+|-|/|*|%|\^)]/);
}

function toDegreeOrRadian(angle) {

    if (rad.classList[1] == "active") {
        return angle;
    }
    if (deg.classList[1] == "active") {
        return angle * Math.PI / 180;
    }
}

function factorial(x) {

    if (x == 0 || x == 1) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

function signChange(num) {

    return -num;
}

deg.addEventListener('click', () => {

    rad.classList.remove("active");
    deg.classList.add("active");
})

rad.addEventListener('click', () => {

    deg.classList.remove("active");
    rad.classList.add("active");
})

clearAll();
deleteLast();
displayNum();
DisplayOp()
scientificCalc();