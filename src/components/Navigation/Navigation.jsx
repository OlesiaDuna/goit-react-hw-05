import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <nav className={css.navigation}>
          <ul className={css.navList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navigation;
