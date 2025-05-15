const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0;
let awaitingNextValue = false;

function addNumberValue(number) {
  if (awaitingNextValue) {
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
  } else {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === "0" ? number : displayValue + number;
  }
}

const calculate = {
  "/": (firstNumber, secondNuumber) => firstNumber / secondNuumber,
  "*": (firstNumber, secondNuumber) => firstNumber * secondNuumber,
  "+": (firstNumber, secondNuumber) => firstNumber + secondNuumber,
  "-": (firstNumber, secondNuumber) => firstNumber - secondNuumber,
  "=": (firstNumber, secondNuumber) => secondNuumber,
};

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
}

inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", () => addNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => useOperator(inputBtn.value));
  }
});
