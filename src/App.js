import ss from "../packages/dist";

const styles = ss({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--primary)",
    height: "100vh",
    
    "& div": {
      padding: "30px",
      fontSize: "60px",
      fontWeight: "600",
      background: "black",
      color: "var(--secondary)",
    },
  },
});

const App = document.createElement("div");
App.innerHTML = `
<div class="${styles.container}">
    <div>
        Hello, Stylists ✨!
    </div>
</div>`;

export default App;
