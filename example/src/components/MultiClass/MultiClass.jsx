import React from "react";
import { styles } from "./MultiClass.styles";

/**
 * Depicting simple multiple classes usage to style
 */
export default () => {
  return <div className={styles.container + " card"}>Container + Card</div>;
};
