import domReady from "@wordpress/dom-ready";
import { addMessage } from "./add-message";

domReady(function () {
  addMessage();
});
