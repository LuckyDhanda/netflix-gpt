// Full-screen banner with trailer

import TrailerPlayer from "./TrailerPlayer";
import BannerContent from "./BannerContent";
import { useSelector } from "react-redux";

const HeroBanner = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );

  if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
    return null;
  }
  const firstMovie = nowPlayingMovies[0];

  // console.log(firstMovie);

  const { original_title, overview, id } = firstMovie;

  return (
    <div>
      <BannerContent movieTitle={original_title} movieOverview={overview} />
      <TrailerPlayer movieId={id} />
    </div>
  );
};

export default HeroBanner;
