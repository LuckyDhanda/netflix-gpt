import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  //   console.log(movie);
  return (
    <div>
      <div className="w-36 rounded-lg cursor-pointer">
        <img alt="movie poster" src={MOVIE_POSTER_URL + movie.poster_path} />
      </div>
    </div>
  );
};

export default MovieCard;
