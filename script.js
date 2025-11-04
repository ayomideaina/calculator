let display = document.getElementById('display');
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");
const body = document.body;


function appendToDisplay(value) {
    display.value += value;
}

function appendToDisplay(value) {
  if (value === "x") value = "*";
  display.value += value;
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

let theme = 1;

toggle.addEventListener("click", () => {
  theme++;
  if (theme > 3) theme = 1;

  // change the body theme
  body.className = `theme${theme}`;

  // move the circle
  if (theme === 1) {
    circle.style.left = "5px";
  } else if (theme === 2) {
    circle.style.left = "calc(50% - 7px)";
  } else {
    circle.style.left = "calc(100% - 20px)";
  }
});