import createClassNames from "./utils/createClassNames";

/**
 * Simple single class creator
 * @param styles
 * @returns classes
 */
function createStyles(styles: Object) {
  const result = createClassNames(styles);
  return result.classes;
}

export default createStyles;
