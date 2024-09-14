import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import css from "./MovieReviews.module.css";
import { fetchMovieReviews } from "../../apiService/movies";
import NoFoundMessage from "../NotFoundMessage/NotFoundMessage";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const reviewsRef = useRef(null);

  useEffect(() => {
    if (!movieId) return;

    async function getReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  useEffect(() => {
    if (reviews?.length > 0 && reviewsRef.current) {
      const { height } = reviewsRef.current.getBoundingClientRect();
      window.scrollBy({ top: height, behavior: "smooth" });
    }
  }, [reviews]);

  return (
    <section>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }, index) => (
            <li key={id} ref={index === 0 ? reviewsRef : null}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <NoFoundMessage
          text={"Unfortunately, there are no reviews for this movie yet"}
        />
      )}
    </section>
  );
}
