import css from "./GoBackButton.module.css";
import { Link } from "react-router-dom";
import { PiArrowFatLeftDuotone } from "react-icons/pi";

const GoBackButton = ({ to, children }) => {
  return (
    <Link to={to} aria-label="go HomePage">
      <PiArrowFatLeftDuotone />
      {children}
    </Link>
  );
};
export default GoBackButton;
