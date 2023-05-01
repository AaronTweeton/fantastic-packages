function addMessage() {
  const el = document.querySelector("#app");

  if (el) {
    el.innerText = "Plugin JavaScript is loaded.";
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  addMessage();
});
