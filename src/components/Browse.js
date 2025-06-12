import { useSelector } from "react-redux";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";

import Header from "./Header";
import HeroBanner from "./HeroBanner";

import SecondaryContainer from "./SecondaryContainer";
import MovieSearchPage from "./MovieSearchPage";

const Browse = () => {
  const searchView = useSelector((store) => store.search.showSearchView);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />

      {searchView ? (
        <MovieSearchPage />
      ) : (
        <>
          <HeroBanner />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
