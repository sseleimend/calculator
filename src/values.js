import { calculatorDisplay } from "./selectors.js";

let firstValue = 0;
let awaitingNextValue = false;
let operatorValue = "";

export function getFirstValue() {
  return firstValue;
}

export function setFirstValue(value) {
  firstValue = value;
}

export function getAwaitingNextValue() {
  return awaitingNextValue;
}

export function setAwaitingNextValue(value) {
  awaitingNextValue = value;
}

export function getOperatorValue() {
  return operatorValue;
}

export function setOperatorValue(value) {
  operatorValue = value;
}

export function resetAll() {
  firstValue = 0;
  operatorValue = "";
  awaitingNextValue = false;
  calculatorDisplay.textContent = "0";
}
