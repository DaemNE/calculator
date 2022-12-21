const screenTop = document.getElementById("screenTop")
const screenBottom = document.getElementById("screenBottom")
const buttons = document.querySelectorAll(".btn")
let operator;
let countDot = 0;

function updateDisplay() {
    if (screenBottom.textContent != 0) {
        screenTop.textContent = Array.from(screenTop.textContent)
                                            .splice(0, screenTop.textContent.length-1)
                                            .join("")
        screenTop.textContent = screenBottom.textContent
    }

    
    screenBottom.textContent = "0"

    document.getElementById("description").textContent = "Hi, this is my calculator"

}

function cleared() {
    screenTop.textContent = "0"
    screenBottom.textContent = "0"
}

function del() {
    if(screenBottom.textContent != 0) {

        if (screenBottom.textContent.length === 1) {
            screenBottom.textContent = 0
        } else {
            screenBottom.textContent = Array.from(screenBottom.textContent)
                                            .splice(0, screenBottom.textContent.length-1)
                                            .join("")
        }
        
    }
    
}

function equals() {
    switch (operator) {
        case "+": sum();
        break;
        case "-": subtract();
        break;
        case "*": multiply();
        break;
        case "/": divide();
        break;
    }
    if (screenBottom.textContent == "Infinity" || screenBottom.textContent == "NaN") {
        document.getElementById("description").textContent = "You can't divide by 0, silly!"
        cleared()
    }
    operator = ""
}

function one() {
    checkForDot()
    if (screenBottom.textContent != 0 || countDot > 0){
        screenBottom.textContent += "1"
    } else {
        screenBottom.textContent = 1
    }
}
function two() {
    checkForDot()
    if (screenBottom.textContent != 0 || countDot > 0){
        screenBottom.textContent += "2"
    } else {
        screenBottom.textContent = 2
    }
}
function three() {
    checkForDot()
    if (screenBottom.textContent != 0 || countDot > 0){
        screenBottom.textContent += "3"
    } else {
        screenBottom.textContent = 3
    }
}
function four() {
    checkForDot()
    if (screenBottom.textContent != 0 || countDot > 0){
        screenBottom.textContent += 4
    } else {
        screenBottom.textContent = 4
    }
}
function five() {
    checkForDot()
    if (screenBottom.textContent != 0 || countDot > 0){
        screenBottom.textContent += "5"
    } else {
        screenBottom.textContent = 5
    }
}
function six() {
    checkForDot()
    if (screenBottom.textContent != 0 || countDot > 0){
        screenBottom.textContent += "6"
    } else {
        screenBottom.textContent = 6
    }
}
function seven() {
    checkForDot()
    if (screenBottom.textContent != 0 || countDot > 0){
        screenBottom.textContent += "7"
    } else {
        screenBottom.textContent = 7
    }
}
function eight() {
    checkForDot()
    if (screenBottom.textContent != 0 || countDot > 0){
        screenBottom.textContent += "8"
    } else {
        screenBottom.textContent = 8
    }
}
function nine() {
    checkForDot()
    if (screenBottom.textContent != 0 || countDot > 0){
        screenBottom.textContent += "9"
    } else {
        screenBottom.textContent = 9
    }
}
function zero() {
    checkForDot()
    console.log(countDot)
    if (screenBottom.textContent != 0 || countDot > 0){
        screenBottom.textContent += "0"
    } else {
        screenBottom.textContent = 0
    }
}

function checkForDot() {
    let arr = Array.from(screenBottom.textContent)
    countDot = 0
    arr.forEach((letter) => {
        if (letter == ".") {
            countDot++
        }
    })
}
function dot() {
    
    checkForDot()
    if (countDot == 0) {
        screenBottom.textContent += "."
    } else {
        document.getElementById("description").textContent = "You can't have more than one comma!"
    }
}

function setDivide() {
    if (screenBottom.textContent != 0) {
        equals()
    }
    if(operator == "") {
        operator = "/"
        updateDisplay()
        screenTop.textContent += " /"
    } else {
        screenTop.textContent = Array.from(screenTop.textContent)
                                            .splice(0, screenTop.textContent.length-1)
                                            .join("");
        operator = "/"
        updateDisplay()
        screenTop.textContent += " /"
        
    }
}
function setSum() {
    if (screenBottom.textContent != 0) {
        equals()
    }
    if(operator == "") {
        operator = "+"
        updateDisplay()
        screenTop.textContent += " +"
    } else {
        screenTop.textContent = Array.from(screenTop.textContent)
                                            .splice(0, screenTop.textContent.length-1)
                                            .join("");
        operator = "+"
        updateDisplay()
        screenTop.textContent += " +"
        
    }
}
function setMultiply() {
    if (screenBottom.textContent != 0) {
        equals()
    }
    if(operator == "") {
        operator = "*"
        updateDisplay()
        screenTop.textContent += " *"
    } else {
        screenTop.textContent = Array.from(screenTop.textContent)
                                            .splice(0, screenTop.textContent.length-1)
                                            .join("");
        operator = "*"
        updateDisplay()
        screenTop.textContent += " *"
        
    }
}
function setSubtract() {
    if (screenBottom.textContent != 0) {
        equals()
    }
    if(operator == "") {
        operator = "-"
        updateDisplay()
        screenTop.textContent += " -"
    } else {
        screenTop.textContent = Array.from(screenTop.textContent)
                                            .splice(0, screenTop.textContent.length-1)
                                            .join("");
        operator = "-"
        updateDisplay()
        screenTop.textContent += " -"
        
    }
}

function sum() {
    let firstNumber = Number(Array.from(screenTop.textContent)
                           .splice(0, screenTop.textContent.length-1)
                           .join(""))
    let secondNumber = Number(screenBottom.textContent)
    let result = firstNumber + secondNumber
    screenTop.textContent = 0
    screenBottom.textContent = result;
};

function multiply() {
    let firstNumber = Number(Array.from(screenTop.textContent)
                           .splice(0, screenTop.textContent.length-1)
                           .join(""))
    let secondNumber = Number(screenBottom.textContent)
    let result = firstNumber * secondNumber
    screenTop.textContent = 0
    screenBottom.textContent = result;
};

function divide() {
    let firstNumber = Number(Array.from(screenTop.textContent)
                           .splice(0, screenTop.textContent.length-1)
                           .join(""))
    let secondNumber = Number(screenBottom.textContent)
    let result = (firstNumber / secondNumber)
    screenTop.textContent = 0
    screenBottom.textContent = result;
};

function subtract() {
    let firstNumber = Number(Array.from(screenTop.textContent)
                           .splice(0, screenTop.textContent.length-1)
                           .join(""))
    let secondNumber = Number(screenBottom.textContent)
    let result = (firstNumber - secondNumber)
    screenTop.textContent = 0
    screenBottom.textContent = result;
};