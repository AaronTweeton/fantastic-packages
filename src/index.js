import { createRoot, render, createElement } from "@wordpress/element";
import domReady from "@wordpress/dom-ready";
import { Greeting } from "./greeting";

domReady(function () {
  const domElement = document.getElementById("app");
  const uiElement = createElement(Greeting, { toWhom: "World" });

  if (createRoot) {
    createRoot(domElement).render(uiElement);
  } else {
    render(uiElement, domElement);
  }
});
