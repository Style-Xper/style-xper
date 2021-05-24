export default (html, state) => {
  const states = Object.keys(state);
  const renderedHTML = { value: `${html}` };

  const replaceState = (currentState, parentKey) => (key) => {
    if (typeof currentState[key] === "string") {
      renderedHTML.value = `${renderedHTML.value}`.replaceAll(
        !!parentKey ? `${parentKey}.${key}` : `${key}`,
        currentState[key]
      );
    }

    if (typeof currentState[key] === "object") {
      const keys = Object.keys(currentState[key]);
      keys.forEach(replaceState(currentState[key], key));
    }
  };

  states.forEach(replaceState(state, null, renderedHTML.value));

  return renderedHTML.value;
};
