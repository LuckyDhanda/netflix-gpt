import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import Header from "./Header";
import HeroBanner from "./HeroBanner";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/**
       * MainContainer
       *  - backgroundMovieTrailer
       *  - MovieTitle
       * SecondaryContainer
       *  - MovieList * n
       */}
      <HeroBanner />
    </div>
  );
};

export default Browse;
