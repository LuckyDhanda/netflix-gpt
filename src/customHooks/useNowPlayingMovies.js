import { useEffect } from "react";
import { API_OPTIONS, url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {
    const response = await fetch(url, API_OPTIONS);
    const data = await response.json();
    console.log(data);

    dispatch(addNowPlayingMovies(data));
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
