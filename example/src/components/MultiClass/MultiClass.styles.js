import { synth } from "../../utils/synth";

export const styles = synth.createStyles({
  container: {
    fontSize: "60px",
    background: "var(--secondary)",
    padding: "16px",

    "&.card": {
      borderRadius: "100%",
      background: "var(--primary",
    },
  },
});
