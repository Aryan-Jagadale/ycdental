import React from "react";
import { lab3, lab4, lab41 } from "../../utils/ugPgCourse";
//import ImgLazyLoad from "../ImgLazyLoad";
import { GridLab3, GridLab4 } from "./GridLab4";

const Labrotiers = () => {
  return (
    <div>
      <section className="p-5">
        <h2 className="font-fam font-bold text-3xl text-center tracking-wide">
          Laboratories
        </h2>
        <div>
          <section className="grid-4 flex items-center justify-around gap-3 mt-4">
            {lab4.map((item) => (
              <GridLab4 key={item.label} item={item} />
            ))}
          </section>

          <section className="grid-4 flex items-center justify-around  gap-3 mt-3">
            {lab3.map((item) => (
              <GridLab3 key={item.label} item={item} />
            ))}
          </section>

          <section className="grid-4 flex items-center justify-around gap-3  mt-3">
            {lab41.map((item) => (
              <GridLab4 key={item.label} item={item} />
            ))}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Labrotiers;
