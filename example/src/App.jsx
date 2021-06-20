import React from "react";
import { routes } from "./utils/routes";
import { styles } from "./App.styles";

export default () => {
  const [currentRoute, setRoute] = React.useState(routes?.[0]?.value);
  const [firstTime, setFirstTime] = React.useState(true);

  React.useEffect(() => {
    const pathName = location.pathname;
    const currentPath = pathName.replace("/", "");
    setRoute(currentPath);
  }, [location]);

  React.useEffect(() => {
    if (firstTime) {
      history.pushState(null, null, `/${routes?.[0]?.value}`);
      setFirstTime(false);
    }
  }, [firstTime]);

  const handleDirect = (value) => () => {
    history.pushState(null, null, `/${value}`);
  };

  const SelectedRoute = routes.find(
    (route) => route.value === currentRoute
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
                  (currentRoute === route?.value ? styles.selectedLink : "")
                }
                onClick={handleDirect(route?.value ?? "")}>
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
