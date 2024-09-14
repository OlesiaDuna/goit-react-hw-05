import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <section>
      <div>
        <h1>404</h1>
        <p>
          Page not found
          <span>
            <Link to="/">Go To Home Page</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
