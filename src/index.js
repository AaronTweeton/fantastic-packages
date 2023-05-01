import { createRoot, render, createElement } from "@wordpress/element";
import domReady from "@wordpress/dom-ready";
import { App } from "./app";

domReady(function () {
  const domElement = document.getElementById("app");
  const uiElement = createElement(App, { toWhom: "World" });

  if (createRoot) {
    createRoot(domElement).render(uiElement);
  } else {
    render(uiElement, domElement);
  }
});
