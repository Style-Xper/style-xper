import React from "react";
import { routes } from "./utils/routes";
import { styles } from "./App.styles";

export default () => {
  const [currentRoute, setRoute] = React.useState("Single Class");

  const handleDirect = (label) => () => {
    setRoute(label);
  };

  const SelectedRoute = routes.find(
    (route) => route.label === currentRoute
  )?.component;

  return (
    <div className={styles.container}>
      <div className={styles.sidePanel}>
        <ul className={styles.list}>
          {routes.map((route, index) => (
            <li key={index} className={styles.listItem}>
              <a
                className={
                  styles.linkItem +
                  " " +
                  (currentRoute === route?.label ? styles.selectedLink : "")
                }
                onClick={handleDirect(route.label)}>
                {route.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>{!!SelectedRoute && <SelectedRoute />}</div>
    </div>
  );
};
