import React, { useState } from "react";
import { useSelector } from "react-redux";
import useFetchTrailerVideo from "../customHooks/useFetchTrailerVideo";
import TrailerModal from "./TrailerModal";
import WatchTrailerButton from "./WatchTrailerButton";

const MovieSuggestions = () => {
  const results = useSelector((state) => state.movieSuggestions.results);
  const fetchTrailer = useFetchTrailerVideo();

  const [trailer, setTrailer] = useState(null);

  const handleTrailerClick = async (movieId) => {
    const result = await fetchTrailer(movieId);
    if (result) {
      setTrailer(result);
    } else {
      alert("Trailer not available.");
    }
  };

  const closeModal = () => setTrailer(null);

  const filteredResults = results?.filter((movie) => movie.poster_path) || [];

  if (!filteredResults.length) {
    return (
      <p className="text-white text-center mt-10 text-lg">
        Start typing above to search for movies 🎬
      </p>
    );
  }

  return (
    <>
      <div className="w-full max-w-[1280px] px-4 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {filteredResults.map((movie) => (
          <div
            key={movie.id}
            className="bg-[#1c1c1e] rounded-lg overflow-hidden shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[280px] object-cover"
            />
            <div className="p-3">
              <div className="flex justify-between items-center">
                <h3 className="text-white text-lg font-semibold truncate">
                  {movie.title}
                </h3>
                {movie.release_date && (
                  <p className="text-gray-400 text-xs">
                    {movie.release_date.slice(0, 4)}
                  </p>
                )}
              </div>
              <WatchTrailerButton
                movieId={movie.id}
                onClick={handleTrailerClick}
              />
            </div>
          </div>
        ))}
      </div>

      {trailer && <TrailerModal trailer={trailer} onClose={closeModal} />}
    </>
  );
};

export default MovieSuggestions;
