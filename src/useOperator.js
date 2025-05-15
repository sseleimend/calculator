import calculate from "./calculate.js";
import { calculatorDisplay } from "./selectors.js";
import {
  getAwaitingNextValue,
  getFirstValue,
  getOperatorValue,
  setAwaitingNextValue,
  setFirstValue,
  setOperatorValue,
} from "./values.js";

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);

  if (getOperatorValue() && getAwaitingNextValue()) {
    setOperatorValue(operator);
    return;
  }

  if (!getFirstValue()) {
    setFirstValue(currentValue);
  } else {
    const calculation = calculate[getOperatorValue()](
      getFirstValue(),
      currentValue
    );
    calculatorDisplay.textContent = calculation;
    setFirstValue(calculation);
  }

  setAwaitingNextValue(true);
  setOperatorValue(operator);
}

export default useOperator;
