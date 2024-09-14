import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import { fetchMovieCredits } from "../../apiService/movies";
import CastCard from "../../components/CastCard/CastCard";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import NotFoundMessage from "../../components/NotFoundMessage/NotFoundMessage";
const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const castRef = useRef(null);

  useEffect(() => {
    const handleMovieCredits = async () => {
      if (!movieId) return;
      setIsLoading(true);
      setIsError(false);
      try {
        const { cast } = await fetchMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    handleMovieCredits();
  }, [movieId]);

  useEffect(() => {
    if (cast?.length > 0 && castRef.current) {
      const { height } = castRef.current.getBoundingClientRect();
      window.scrollBy({ top: height * 4, behavior: "smooth" });
    }
  }, [cast]);

  return (
    <ul className={css.cardList}>
      {cast && cast.length > 0 ? (
        cast.map(({ id, ...rest }, index) => {
          return (
            <li
              className={css.cardItem}
              key={id}
              ref={index === 0 ? castRef : null}
            >
              <CastCard data={rest} />
            </li>
          );
        })
      ) : (
        <NotFoundMessage
          text={"Unfortunately, there are no cast for this movie yet"}
        />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </ul>
  );
};
export default MovieCast;
