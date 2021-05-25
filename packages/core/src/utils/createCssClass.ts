import { ELEMENTS } from "../constants";
import jsToCss from "./jsToCss";

export default (className: string, styleObj: any = {}) => {
  const { ...cssProps } = JSON.parse(JSON.stringify(styleObj));
  const cssString = jsToCss(cssProps);

  return ELEMENTS.includes(className)
    ? `${className} {
  ${cssString}
}`
    : `\n.${className} {
    ${cssString}
}`;
};
