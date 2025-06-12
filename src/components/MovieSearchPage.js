import MovieSuggestions from "./MovieSuggestions";
import MovieSearchBar from "./MovieSearchBar";

const MovieSearchPage = () => {
  return (
    <div className="flex flex-col items-center pt-[2%] bg-gray-800 min-h-screen">
      <MovieSearchBar />
      <MovieSuggestions />
    </div>
  );
};

export default MovieSearchPage;
