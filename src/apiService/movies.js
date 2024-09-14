import Axios from "axios";

const ACCESS_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2EyMzYzOGRlYmRlZDYxZmFmZDY2OTdkMWUxZTYxYiIsIm5iZiI6MTcyNTIwMTU1OC4zODgyMzQsInN1YiI6IjY2ZDQ3YjBjMGY4OGE0NGJmOWNiNTZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZutCLE_n9jVMuB3dp1BotR8ZZ4aQrGIo-HxM09INYa8";
const axios = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${ACCESS_KEY}`,
    accept: "application/json",
  },
});
const API_PATH = {
  trend: "/trending/movie/day?",
  movie: "/movie/",
  search: "/search/movie",
};

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(API_PATH.trend, {});
  return data;
};

export const fetchSearchMovie = async (query, page = 1) => {
  const response = await axios.get(API_PATH.search, {
    params: {
      query,
      page,
    },
  });

  return response.data;
};

export const fetchMovieById = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "?");
  return response.data;
};

export const fetchMovieCredits = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "/credits?");
  return response.data;
};

export const fetchMovieReviews = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "/reviews?");
  return response.data;
};
