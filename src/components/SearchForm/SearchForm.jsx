import css from "./SearchForm.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const SearchForm = ({ handleSearchMovie, query }) => {
  const [search, setSearch] = useState(query ?? "");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (search.trim() === "") {
      toast("Please enter your query!");
      return;
    }
    handleSearchMovie(search);
  };

  return (
    <form className={css.searchForm} onSubmit={onHandleSubmit}>
      <input
        className={css.searchInput}
        onChange={handleChange}
        type="search"
        name="query"
        value={search}
      />
      <button type="submit" aria-label="search button">
        Search
      </button>
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
    </form>
  );
};
export default SearchForm;
