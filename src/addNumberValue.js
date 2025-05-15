import { getAwaitingNextValue, setAwaitingNextValue } from "./values";

import { calculatorDisplay } from "./selectors";

function addNumberValue(number) {
  if (getAwaitingNextValue()) {
    calculatorDisplay.textContent = number;
    setAwaitingNextValue(false);
  } else {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === "0" ? number : displayValue + number;
  }
}

export default addNumberValue;
