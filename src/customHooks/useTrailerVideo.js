import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  // const trailerVideo = useSelector((state) => state.movies.trailerVideo);

  const fetchMovieData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    // console.log(data);

    const movieTrailer = data.results.find((video) => video.type === "Trailer");
    if (movieTrailer === undefined) {
      console.log("No trailer found for this movie.");
    }

    dispatch(addTrailerVideo(movieTrailer));
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
};

export default useTrailerVideo;
