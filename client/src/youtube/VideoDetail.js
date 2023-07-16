import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h1 className="text-blue-500 text-2xl mb-4">Learniverse Binge</h1>
        <br />
        <p className="text-lg leading-7">
          Let's start your learning journey with learniverse
          <br />
          Unlocking Knowledge, One Click at a Time: Your Online Teaching Video Oasis!.
        </p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={videoSrc}
          allowFullScreen
          title="Video player"
          className="w-full h-full"
        />
      </div>
      <div className="bg-gray-100 p-4 mt-4">
        <h4 className="text-blue-500 text-xl mb-2">{video.snippet.title}</h4>
        <p className="text-lg leading-7">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
