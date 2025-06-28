import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setMovieSuggestions } from "../utils/movieSuggestionsSlice";

const MovieSearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  // Debounced fetch effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!query.trim()) {
        dispatch(setMovieSuggestions([]));
        return;
      }

      fetchMovies(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const fetchMovies = async (searchTerm) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        searchTerm
      )}&include_adult=false&language=en-US&page=1`;

      const response = await fetch(url, API_OPTIONS);
      const data = await response.json();
      dispatch(setMovieSuggestions(data.results || []));
    } catch (err) {
      console.error("Search failed", err);
    }
  };

  return (
    <div className="relative z-30 w-[80%] md:w-[50%] mt-[20%] md:mt-0 ">
      <form
        className="bg-black flex rounded"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What would you like to watch?"
          className="flex-grow px-4 py-2 bg-black text-white border border-white focus:outline-none"
        />
      </form>
    </div>
  );
};

export default MovieSearchBar;
