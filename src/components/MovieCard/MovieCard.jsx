import css from "./MovieCard.module.css";
import { IMG_URL, DEFAULT_TITLE } from "../../constants/constants";

const MovieCard = ({ data: { poster_path, title } }) => {
  return (
    <div className={css.moviecard}>
      {poster_path ? (
        <img
          className={css.moviePoster}
          src={IMG_URL + poster_path}
          alt={"avatar" + title || DEFAULT_TITLE}
          loading="lazy"
        />
      ) : (
        <p>No Image</p>
      )}
      <h3>{title || DEFAULT_TITLE}</h3>
    </div>
  );
};
export default MovieCard;
