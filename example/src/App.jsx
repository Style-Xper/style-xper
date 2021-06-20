import React from "react";
import { sx } from "./utils/sx";

export const styles = sx.createStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",

    alignItems: "center",
    background: "var(--primary)",
    height: "100vh",
    position: "relative",
  },

  title: {
    fontWeight: "bold",
    fontSize: "60px",
  },

  logo: {
    fontWeight: "1400",
    fontSize: "60px",
    marginTop: "40px",
    color: "var(--secondary)"
  },
});

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>This is Style-Xper</div>
      <div className={styles.logo}>{"<🖌️>"}</div>
    </div>
  );
};
