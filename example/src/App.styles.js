import { synth } from "./utils/synth";

export const styles = synth.createStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
    height: "100vh",
    position: "relative",
  },

  sidePanel: {
    position: "absolute",
    top: "4px",
    left: "4px",
  },

  list: {
    padding: "8px 24px",
    background: "#333",
    height: "92vh",
    overflow: "auto",
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
