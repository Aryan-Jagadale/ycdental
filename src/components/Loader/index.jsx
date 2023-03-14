import React from "react";
import "../../style/Loader/loader.css";

const index = () => {
  return (
    <span className="loading">
      <svg width="64px" height="48px">
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          id="back"
        ></polyline>
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          id="front"
        ></polyline>
      </svg>
      <h1>Loading...</h1>
    </span>
  );
};

export default index;
