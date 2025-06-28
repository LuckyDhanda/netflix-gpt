import { useState } from "react";
import { useSelector } from "react-redux";

const BannerContent = ({ movieTitle, movieOverview }) => {
  const [showFull, setShowFull] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);

  return (
    <div className="absolute top-[34%] md:top-1/4 left-4 right-4 md:left-10 max-w-xl md:space-y-4 text-white drop-shadow-lg z-10">
      <h1 className="text-2xl md:text-5xl font-extrabold tracking-wide drop-shadow-md">
        {movieTitle}
      </h1>

      <p
        className={`text-sm md:text-lg max-w-md leading-relaxed ${
          showFull ? "" : "line-clamp-3"
        }`}
      >
        {movieOverview}
      </p>

      <div className="flex flex-wrap gap-3 py-3 md:gap-4 md:py-8">
        <button
          onClick={() => setShowTrailer(true)}
          className="bg-white text-black px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded flex items-center font-semibold hover:bg-gray-300 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>

        <button
          onClick={() => setShowFull(!showFull)}
          className="bg-gray-700 bg-opacity-70 text-white px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded flex items-center font-semibold hover:bg-gray-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="8" />
          </svg>
          {showFull ? "Hide Info" : "More Info"}
        </button>
      </div>

      {/* Full-Screen Trailer Overlay */}
      {showTrailer && trailerVideo && (
        <div className="fixed inset-0 bg-black z-50 flex justify-center items-center">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=0&controls=1&rel=0`}
              title="Full Trailer"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerContent;
