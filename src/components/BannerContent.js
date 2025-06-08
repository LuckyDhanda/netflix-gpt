const BannerContent = ({ movieTitle, movieOverview }) => {
  return (
    <div className="absolute top-1/4 left-10 max-w-xl space-y-4 text-white drop-shadow-lg  ">
      <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-md">
        {movieTitle}
      </h1>

      <p className="text-lg max-w-md leading-relaxed line-clamp-3">
        {movieOverview}
      </p>

      {/* Buttons */}
      <div className="flex space-x-4 py-10">
        <button className="bg-white text-black px-6 py-3 rounded flex items-center font-semibold hover:bg-gray-300 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>

        <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-3 rounded flex items-center font-semibold hover:bg-gray-600 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="8" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default BannerContent;
