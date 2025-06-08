//  Video player for trailer
import useTrailerVideo from "../customHooks/useTrailerVideo";
import { useSelector } from "react-redux";

const TrailerPlayer = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);

  return (
    <div className="">
      <iframe
        className="w-screen h-[100vh]"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="autoplay"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default TrailerPlayer;
