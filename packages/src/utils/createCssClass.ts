import { ELEMENTS } from "../constants";
import jsToCss from "./jsToCss";

export default (className: string, styleObj: any = {}, callNested: any) => {
  const { elements, nested, ...cssProps } = styleObj;
  const cssString = jsToCss(cssProps);

  if (typeof elements === "function") {
    const elementsList = elements();
    const elementsKeys = Object.keys(elementsList);

    if (elementsKeys?.length) {
      elementsKeys.forEach(callNested(className, elementsList));
    }
  }

  return ELEMENTS.includes(className)
    ? `${className} {
  ${cssString}
}`
    : `\n.${className} {
    ${cssString}
}`;
};
