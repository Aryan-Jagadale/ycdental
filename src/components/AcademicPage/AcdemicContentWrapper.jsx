import React from "react";
import { BsArrowBarRight } from "react-icons/bs";

export const UgEglibility = ({ item, index }) => {
  return (
    <div key={index} className="ml-8 mr-4 my-2">
      <p>
        <span className="mr-3">{index + 1}.</span>
        {item.content}
      </p>
    </div>
  );
};

export const UgPgContentWrapper = ({ item, index }) => {
  return (
    <div key={index} className="mx-3 my-4">
      <p className="flex justify-center">
        <span className="mr-3">
          <BsArrowBarRight />{" "}
        </span>
        {item.content}
      </p>
    </div>
  );
};
