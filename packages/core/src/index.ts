import createClassNames from "./utils/createClassNames";

/**
 * Simple single class creator
 * @param styles
 * @returns classes
 */
function createStyles(styles: Object, options?: any) {
  const result = createClassNames(styles, options);
  return result.classes;
}

export default createStyles;
