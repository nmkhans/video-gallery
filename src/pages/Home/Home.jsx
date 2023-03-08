import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination";
import Tags from "../../components/Tags/Tags";
import VideoGallery from "../../components/VideoGallery/VideoGallery";

const Home = () => {
  return (
    <>
      <Tags />
      <VideoGallery />
      <Pagination />
    </>
  );
};

export default Home;
