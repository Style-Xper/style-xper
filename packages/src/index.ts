import createClassNames from "./utils/createClassNames";

function createStyles(styles: Object) {
  const result = createClassNames(styles);
  return result.classes;
}

export default createStyles;
