import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies } = useSelector(
    (state) => state.movies
  );

  // Wait until all required movie lists are available
  if (!nowPlayingMovies || !popularMovies || !topRatedMovies) {
    return null;
  }

  return (
    <div className="w-full h-full bg-gray-900 text-white">
      <div className="-mt-60 space-y-6">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
