import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation = () => (
  <nav className={styles.nav}>
    <button className={styles.button}>
      <NavLink
        className={styles.link}
        activeClassName={styles.active}
        exact
        to="/"
      >
        Home page
      </NavLink>
    </button>
    <button className={styles.button}>
      <NavLink
        className={styles.link}
        activeClassName={styles.active}
        exact
        to="/movies"
      >
        Movies
      </NavLink>
    </button>
  </nav>
);

export default Navigation;
