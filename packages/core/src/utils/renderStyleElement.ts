export default (element: HTMLStyleElement) => {
  if ("head" in document) {
    document.head.appendChild(element);
  }
};
