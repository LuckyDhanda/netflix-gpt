// useFetchTrailerVideo.js
import { API_OPTIONS } from "../utils/constants";

const useFetchTrailerVideo = () => {
  const fetchTrailer = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await response.json();

      const movieTrailer = data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      return movieTrailer;
    } catch (error) {
      console.error("Error fetching trailer:", error);
      return null;
    }
  };

  return fetchTrailer;
};

export default useFetchTrailerVideo;
