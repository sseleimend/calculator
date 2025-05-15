import { getAwaitingNextValue } from "./values.js";
import { calculatorDisplay } from "./selectors.js";

function addDecimal() {
  if (getAwaitingNextValue()) {
    return;
  }

  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent += ".";
  }
}

export default addDecimal;
