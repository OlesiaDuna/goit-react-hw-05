import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.moviesList}>
      {movies.map(({ id, ...rest }) => {
        return (
          <li className={css.movieItem} key={id}>
            <Link
              className={css.movieLink}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              <MovieCard data={rest} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;
