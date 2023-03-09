import React from "react";
import { Bars } from "react-loader-spinner";

const Loading = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="rgb(37, 99, 235)"
      ariaLabel="bars-loading"
      wrapperClass="justify-center mt-12"
      visible={true}
    />
  );
};

export default Loading;
