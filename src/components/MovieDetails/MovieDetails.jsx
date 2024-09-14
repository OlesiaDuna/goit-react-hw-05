import { useMemo } from "react";
import css from "./MovieDetails.module.css";
import { DEFAULT_TITLE, IMG_URL } from "../../constants/constants";

const MovieDetails = ({
  movieDetails: { backdrop_path, title, overview, vote_average, genres },
}) => {
  const genresList = useMemo(() => {
    if (!genres) return;
    const genresOfMovie =
      genres.length > 0 && genres.map((genre) => genre.name).join("");
    return genresOfMovie;
  }, [genres]);

  return (
    <div className={css.contentWrapper}>
      {backdrop_path ? (
        <img
          className={css.posterImg}
          src={IMG_URL + backdrop_path}
          alt={"avatar " + title || DEFAULT_TITLE}
          loading="lazy"
        />
      ) : (
        <p>No images</p>
      )}
      <div className={css.content}>
        <span>The Avarage Vote: {vote_average}</span>

        <div>
          <span>Overview</span>
          <p>{overview}</p>
        </div>
        {genresList && (
          <div>
            <span>Genres</span>
            <p>{genresList}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
