import createClassNames from "./utils/createClassNames";

function createStyles(styles: Object) {
  const result = createClassNames(styles);
  return result.classes;
}

function createNestedStyles(styles: Object) {
  const result = createClassNames(styles);
  return result.classes;
}

export default (options: any = { syntax: "default" }) => {
  return {
    createStyles:
      options?.syntax === "nested" ? createStyles : createNestedStyles,
  };
};
