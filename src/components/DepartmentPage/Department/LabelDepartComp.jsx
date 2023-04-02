import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const LabelDepartComp = ({ item }) => {
  return (
    <div className="widthAdjust border-b-8 border-[#ECDADA] rounded-lg">
      <div className="divClassDept border-l-8 h-full border-r-8 border-[#ECDADA] rounded-lg">
        <section
          className={`${item.yellowColor ? "border-[#F7DC70]" : "border-[#777D9A]"} borderClassDept border-t-8 rounded-lg bg-white flex flex-col justify-center gap-10 items-center md:w-[20vw] p-3 `}
        >
          <div>
            <LazyLoadImage effect="opacity" className="w-20 h-20 " src={item.label} alt={item.name} />
          </div>
          <div>
            <Link to={item.linkUrl}>
              <h2 className=" tracking-wide text-center font-fam font-bold text-base break-normal md:text-xl cursor-pointer ">
                {item.name}
              </h2>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LabelDepartComp;
