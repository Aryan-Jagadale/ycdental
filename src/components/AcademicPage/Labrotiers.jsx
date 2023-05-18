import React from "react";
import { GridLab3 } from "./GridLab4";
import { row1, row2, row3 } from "../../content/Academics/labrotries";


const Labrotiers = () => {
  return (
    <div id="lab">
      <section className="md:p-14">
        <h2 className="font-fam font-bold text-3xl px-5 md:pt-0 text-center tracking-wide">
          Laboratories
        </h2>

        <div className="gallerySection">
          <section className="flex items-center justify-around flex-col md:flex-row gap-5 mt-4">
            {row1.map((item) => (
              <GridLab3 key={item.label} item={item} />
            ))}
          </section>
          <section className="flex items-center justify-around flex-col md:flex-row gap-5 mt-4">
            {row2.map((item) => (
              <GridLab3 key={item.label} item={item} />
            ))}
          </section>

          <section className="flex items-center justify-around flex-col md:flex-row gap-5 mt-4">
            {row3.map((item) => (
              <GridLab3 key={item.label} item={item} />
            ))}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Labrotiers;
