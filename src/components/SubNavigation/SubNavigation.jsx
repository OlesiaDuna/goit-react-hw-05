import { NavLink } from "react-router-dom";
import css from "./SubNavigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && css.active);
};

const SubNavigation = () => {
  return (
    <nav>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
    </nav>
  );
};

export default SubNavigation;
