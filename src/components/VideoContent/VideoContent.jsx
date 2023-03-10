import React from "react";

const VideoContent = ({ video }) => {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={video.link}
      title={video.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoContent;
