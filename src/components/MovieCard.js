import { useState } from "react";
import useFetchTrailerVideo from "../customHooks/useFetchTrailerVideo";
import { MOVIE_POSTER_URL } from "../utils/constants";
import TrailerModal from "./TrailerModal";

const MovieCard = ({ movie }) => {
  const [trailer, setTrailer] = useState(null);
  const fetchTrailer = useFetchTrailerVideo();

  const handleClick = async () => {
    const trailerData = await fetchTrailer(movie.id);
    if (trailerData) {
      setTrailer(trailerData);
    } else {
      alert("Trailer not available.");
    }
  };

  const closeModal = () => setTrailer(null);

  return (
    <div>
      <div onClick={handleClick} className="w-36 cursor-pointer">
        <img
          className="hover:scale-105 transition-transform duration-300 rounded-sm"
          alt="movie poster"
          src={MOVIE_POSTER_URL + movie.poster_path}
        />
      </div>
      {/* Show trailer modal only if trailer is set */}
      {trailer && <TrailerModal trailer={trailer} onClose={closeModal} />}
    </div>
  );
};

export default MovieCard;
