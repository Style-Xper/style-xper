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

  const createIndividualClass =
    (parentKey?: string, currentStyle?: any) => (key: string) => {
      const id = idGenerator.generateId(key, parentKey);
      const callNested = createIndividualClass;

      const styleStrings = createCssClass(id, currentStyle[key], callNested);
      result.classes[key] = id;

      styleElement.textContent = styleElement.textContent.concat(styleStrings);
    };

  styleKeys.forEach(createIndividualClass(null, styles));

  renderStyleElement(styleElement);

  return result;
}
