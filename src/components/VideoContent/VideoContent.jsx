import React from "react";

const VideoContent = ({ video }) => {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={video.link}
      title={video.title}
      frameborder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default VideoContent;
