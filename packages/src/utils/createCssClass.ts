import jsToCss from "./jsToCss";

export default (className: string, styleObj: Object) => {
  const cssString = jsToCss(styleObj);

  return `\n.${className} {
    ${cssString}
}`;
};
