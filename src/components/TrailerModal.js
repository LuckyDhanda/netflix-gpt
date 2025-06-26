import React from "react";

const TrailerModal = ({ trailer, onClose }) => {
  if (!trailer) return null;

  const YOUTUBE_URL = `https://www.youtube.com/embed/${trailer.key}?autoplay=1`;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center">
      <div className="relative w-[90%] max-w-3xl aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={YOUTUBE_URL}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="rounded-xl"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl bg-gray-800 rounded-full px-3 py-1 hover:bg-red-600"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default TrailerModal;
