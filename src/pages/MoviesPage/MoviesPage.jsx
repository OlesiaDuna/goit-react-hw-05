import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";
import { fetchSearchMovie } from "../../apiService/movies";
import Heading from "../../components/Heading/Heading";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import {
  PiArrowFatLineLeftDuotone,
  PiArrowFatLineRightDuotone,
} from "react-icons/pi";
import SearchForm from "../../components/SearchForm/SearchForm";
import toast, { Toaster } from "react-hot-toast";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const queryValue = searchParams.get("query");
  const page = Number(searchParams.get("page"));

  useEffect(() => {
    if (!searchParams.has("query") && !searchParams.has("page")) return;
    const handleSearchMovie = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const { results } = await fetchSearchMovie(queryValue, page);
        if (results.length === 0) {
          toast("There are no result matching your query!");
          return;
        }
        setMovies(results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    handleSearchMovie();
  }, [queryValue, page, searchParams]);

  const handleSearchMovie = (userQuery) => {
    if (movies === null && queryValue === userQuery) {
      toast("There are no result matching your query!");
      return;
    }
    setSearchParams({ query: userQuery, page: 1 });
    setMovies(null);
  };
  const handleClickNext = () => {
    setSearchParams((prevParam) => ({
      query: queryValue,
      page: Number(prevParam.get("page")) + 1,
    }));
    mainEl.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleClickPrev = () => {
    setSearchParams((prevParam) => ({
      query: queryValue,
      page: Number(prevParam.get("page")) - 1,
    }));
    mainEl.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const mainEl = useRef();

  return (
    <section className={css.container} ref={mainEl}>
      <Heading title={"Search movie!"} />
      <SearchForm handleSearchMovie={handleSearchMovie} query={queryValue} />
      {movies && <MovieList movies={movies} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movies && (
        <div>
          {page > 1 && (
            <button onClick={handleClickPrev} area-label="Previous">
              <PiArrowFatLineLeftDuotone />
              Previous
            </button>
          )}
          {movies.length === 20 && (
            <button onClick={handleClickNext} aria-label="Next">
              Next
              <PiArrowFatLineRightDuotone />;
            </button>
          )}
        </div>
      )}
      <Toaster
        toastOptions={{
          duration: 1500,
          style: {
            border: "1px solid white",
            padding: "16px",
            fontSize: "24px",
            background: "#363636",
            color: "#fff",
            textAlign: "center",
          },
        }}
      />
    </section>
  );
};
export default MoviesPage;
