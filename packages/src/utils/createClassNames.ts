import idGenerator from "./generateId";
import createCssClass from "./createCssClass";
import renderStyleElement from "./renderStyleElement";

export default function createClassNames(styles: any) {
  const styleElement = document.createElement("style");
  styleElement.setAttribute("data-ss", "");

  const result: any = {
    classes: {},
  };

  const styleKeys = Object.keys(styles);

  styleKeys.forEach((key) => {
    const id = idGenerator.generateId(key);
    const styleStrings = createCssClass(id, styles[key]);
    result.classes[key] = id;

    styleElement.textContent = styleElement.textContent.concat(styleStrings);
  });

  renderStyleElement(styleElement);

  return result;
}
