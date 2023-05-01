/**
 * Adds a message to #app using JavaScript.
 */
import { sum } from "./sum";

export function addMessage() {
  const el = document.querySelector("#app");
  const num1 = 2;
  const num2 = 2;

  if (el) {
    el.innerText = `Plugin JavaScript is loaded. ${num1} plus ${num1} is ${sum(
      num1,
      num2
    )}.`;
  }
}
