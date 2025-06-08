import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  // usePopularMovies();

  return (
    <div>
      <Header />
      <HeroBanner />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
