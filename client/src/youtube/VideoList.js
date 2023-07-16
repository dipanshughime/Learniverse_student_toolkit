import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />;
  });

  return <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">{renderedVideos}</div>;
};

export default VideoList;