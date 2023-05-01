import { createElement } from "@wordpress/element";

export function Greeting(props) {
  return createElement("span", null, "Hello " + props.toWhom + "!");
}
