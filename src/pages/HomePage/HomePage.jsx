import { useEffect, useState } from "react";
import css from "./HomePage.module.css";
import { fetchTrendMovies } from "../../apiService/movies";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";
import Heading from "../../components/Heading/Heading";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { results } = await fetchTrendMovies();
        setMovies(results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);
  // console.log(movies);

  return (
    <section className={css.container}>
      <Heading title={"Trending movies"} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movies && <MovieList movies={movies} />}
    </section>
  );
};
export default HomePage;
