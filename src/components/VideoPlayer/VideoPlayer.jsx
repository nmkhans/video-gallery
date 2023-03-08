import React from "react";
import VideoContent from "../VideoContent/VideoContent";
import VideoDescription from "../VideoDescription/VideoDescription";

const VideoPlayer = () => {
  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <VideoContent />
      <VideoDescription />
    </div>
  );
};

export default VideoPlayer;
