import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">{title}</h1>

      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
