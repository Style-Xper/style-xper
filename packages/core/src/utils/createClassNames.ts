import idGenerator from "./generateId";
import createCssClass from "./createCssClass";
import renderStyleElement from "./renderStyleElement";

export default function createClassNames(styles: any, options: any) {
  const styleElement = document.createElement("style");
  styleElement.setAttribute("data-style-xper", "");

  const result: any = {
    classes: {},
  };

  const styleKeys = Object.keys(styles);

  const createIndividualClass = (currentStyle?: any) => (key: string) => {
    const id = idGenerator.generateId(key);
    const styleStrings = createCssClass(id, currentStyle[key]);
    result.classes[key] = id;

    styleElement.textContent = styleElement.textContent.concat(styleStrings);
  };

  styleKeys.forEach(createIndividualClass(styles));

  renderStyleElement(styleElement);

  return result;
}
