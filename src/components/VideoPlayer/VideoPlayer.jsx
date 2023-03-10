import React from "react";
import VideoContent from "../VideoContent/VideoContent";
import VideoDescription from "../VideoDescription/VideoDescription";

const VideoPlayer = ({ video }) => {
  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <VideoContent video={video} />
      <VideoDescription video={video} />
    </div>
  );
};

export default VideoPlayer;
