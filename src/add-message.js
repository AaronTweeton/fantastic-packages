/**
 * Adds a message to #app using JavaScript.
 */
export function addMessage() {
  const el = document.querySelector("#app");

  if (el) {
    el.innerText = "Plugin JavaScript is loaded.";
  }
}
