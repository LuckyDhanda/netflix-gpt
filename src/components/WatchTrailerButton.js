const WatchTrailerButton = ({ movieId, onClick }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick(movieId);
      }}
      className="px-4 py-2 m-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 hover:scale-105 transition-all duration-300 shadow cursor-pointer"
    >
      🎬 Watch Trailer
    </button>
  );
};

export default WatchTrailerButton;
