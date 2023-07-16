import React from 'react';

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div
      onClick={() => handleVideoSelect(video)}
      className="flex flex-col items-center p-4 bg-gray-900 hover:bg-gray-800 rounded transition-colors cursor-pointer"
    >
      <img
        className="w-48 h-48 object-cover rounded mb-4"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="text-lg font-semibold text-white text-center">
        {video.snippet.title}
      </div>
      <p className="text-gray-400 text-sm mt-2 text-center">
        {video.snippet.description}
      </p>
    </div>
  );
};

export default VideoItem;
