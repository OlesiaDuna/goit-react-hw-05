import css from "./Heading.module.css";
import clsx from "clsx";
const Heading = ({ title, top, bottom }) => {
  return (
    <h2
      className={clsx(css.title, {
        [css.top]: top,
        [css.bottom]: bottom,
      })}
    >
      {title}
    </h2>
  );
};
export default Heading;
