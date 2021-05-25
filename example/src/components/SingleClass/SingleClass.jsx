import React from "react";
import { styles } from "./SingleClass.styles";

/**
 * Depicting simple single class and single element usage to style
 */
export default () => {
  return (
    <div className={styles.container}>
      <p className={styles.helloWorld}>Hello World!</p>
    </div>
  );
};
