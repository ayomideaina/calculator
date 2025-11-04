let display = document.getElementById('display');
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");
const body = document.body;

let theme = 1;
let resultCalculated = false; 

function appendToDisplay(value) {
  if (value === "x") value = "*";

  // If a result was just calculated, reset display for new input
  if (resultCalculated) {
    if (!isNaN(value) || value === ".") {
      display.value = value;
    } else {
      display.value += value;
    }
    resultCalculated = false;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
    resultCalculated = true;
  } catch (e) {
    display.value = 'Error';
  }
}

function toggleSign() {
  if (display.value) {
    if (display.value.startsWith('-')) {
      display.value = display.value.slice(1);
    } else {
      display.value = '-' + display.value;
    }
  }
}


toggle.addEventListener("click", () => {
  theme++;
  if (theme > 3) theme = 1;

  // this applies new theme
  body.className = `theme${theme}`;

  // Move toggle circle position
  if (theme === 1) {
    circle.style.left = "5px";
  } else if (theme === 2) {
    circle.style.left = "calc(50% - 7px)";
  } else {
    circle.style.left = "calc(100% - 20px)";
  }
});
