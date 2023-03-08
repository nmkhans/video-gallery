import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import RelatedVideoList from "../../components/RelatedVideoList/RelatedVideoList";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const Video = () => {
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <VideoPlayer />
            <RelatedVideoList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
