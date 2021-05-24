import App from "./src/App";

const redirect = () => {
  history.pushState(null, null, "/example/1");
};

redirect();
document.getElementById("root").appendChild(App);
