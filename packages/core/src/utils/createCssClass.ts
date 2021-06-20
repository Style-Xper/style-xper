import jsToCss from "./jsToCss";

export default (className: string, styleObj: any = {}) => {
  const { ...cssProps } = JSON.parse(JSON.stringify(styleObj));
  const cssString = jsToCss(cssProps);

  return `\n.${className} {
    ${cssString}
}`;
};
