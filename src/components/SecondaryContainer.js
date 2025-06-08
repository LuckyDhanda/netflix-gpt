import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  if (!nowPlayingMovies) {
    return null;
  }

  console.log(nowPlayingMovies);
  return (
    <div className="w-full h-full bg-gray-900 text-white">
      <div className="-mt-60">
        <MovieList title={"Now Playing "} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
