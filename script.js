let display = document.getElementById("result");
let history = document.getElementById("history");
let memory = 0;

function clearDisplay() {
  display.innerText = "0";
  history.innerText = "";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function calculate() {
  try {
    history.innerText = display.innerText;
    display.innerText = eval(display.innerText.replace("%", "*0.01"));
  } catch (e) {
    display.innerText = "Error";
  }
}

function squareRoot() {
  history.innerText = `√(${display.innerText})`;
  display.innerText = Math.sqrt(eval(display.innerText));
}

function memoryClear() {
  memory = 0;
}

function memoryRecall() {
  display.innerText = memory;
}

function memoryAdd() {
  memory += eval(display.innerText);
}

function memorySubtract() {
  memory -= eval(display.innerText);
}

// new Keyboard responsive keys added

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key)) {
    appendNumber(key);
  } else if (key === "+") {
    appendNumber("+");
  } else if (key === "-") {
    appendNumber("-");
  } else if (key === "*") {
    appendNumber("*");
  } else if (key === "/") {
    appendNumber("/");
  } else if (key === "%") {
    appendNumber("%");
  } else if (key === ".") {
    appendNumber(".");
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key.toLowerCase() === "r") {
    squareRoot();
  }
});
