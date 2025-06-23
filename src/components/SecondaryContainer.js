import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    useSelector((state) => state.movies);

  const movieSections = [
    { title: "Now Playing", movies: nowPlayingMovies },
    { title: "Popular", movies: popularMovies },
    { title: "Top Rated", movies: topRatedMovies },
    { title: "Upcoming", movies: upcomingMovies },
  ];

  const validSections = movieSections.filter(
    (section) => section.movies && section.movies.length > 0
  );

  if (validSections.length === 0) return null;

  return (
    <div className="w-full h-full bg-gray-900 text-white">
      <div className="-mt-60 space-y-6">
        {validSections.map(({ title, movies }) => (
          <MovieList key={title} title={title} movies={movies} />
        ))}
      </div>
    </div>
  );
};

export default SecondaryContainer;
