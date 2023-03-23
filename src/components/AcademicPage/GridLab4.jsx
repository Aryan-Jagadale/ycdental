import React from "react";

export const GridLab4 = ({item}) => {
  return (
    <div className="h-[35vh] w-[50vw] border-2 border-[#800000] rounded-lg">
      <img
        src={item.imG}
        alt=""
        className="h-full w-full object-cover rounded-lg"
      />
    </div>
  );
};


export const GridLab3 = ({item}) => {
    return (
      <div className="h-[35vh] w-[50vw] border-2 border-[#800000] rounded-lg">
        <img
          src={item.imG}
          alt=""
          className="h-full w-full object-cover "
        />
      </div>
    );
  };


