import { synth } from "./utils/synth";

export const styles = synth.createStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--primary)",
    height: "100vh",
    position: "relative",
  },

  sidePanel: {
    position: "absolute",
    top: "0px",
    left: "0px",
    padding: "0px 24px",
    background: "#333",
    height: "100vh",
  },

  list: {
    overflow: "auto",
    margin: "0px",
    padding: "16px 0px",
  },

  listItem: {
    padding: "8px 8px",
    display: "block",
  },

  linkItem: {
    color: "white",
    cursor: "pointer",
    fontWeight: 600,
    padding: "8px 24px",
  },

  selectedLink: {
    color: "black",
    background: "var(--secondary)",
  },
});
