import createSynth from "../../packages/dist";
import AppHTML from "./App.html";
import renderHTML from "./utils/renderHTML";

const synth = createSynth();
const styles = synth.createStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--primary)",
    height: "100vh",
    position: "relative",
  },
});

const App = document.createElement("div");
const state = { styles: styles };

App.innerHTML = renderHTML(AppHTML, state);

export default App;
