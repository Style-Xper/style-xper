export default (jsStyle: any) => {
  let cssString = "";
  const jsStyleKeys = Object.keys(jsStyle);
  const lastIndex = jsStyleKeys.length - 1;
  jsStyleKeys.forEach((objectKey, index) => {
    cssString +=
      objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) +
      ": " +
      jsStyle[objectKey] +
      ";" +
      (index !== lastIndex ? "\n    " : "");
  });

  return cssString;
};
