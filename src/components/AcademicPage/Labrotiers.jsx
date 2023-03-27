import React from "react";
import { lab3, lab4, lab41 } from "../../utils/ugPgCourse";
import { GridLab3, GridLab4 } from "./GridLab4";

const Labrotiers = () => {
  return (
    <div id="lab">
      <section className="md:p-14">
        <h2 className="font-fam font-bold text-3xl px-5 md:pt-0 text-center tracking-wide">
          Laboratories
        </h2>
        <div>
          <section className="grid-4 flex items-center justify-aroun flex-col md:flex-row gap-5 mt-4">
            {lab4.map((item) => (
              <GridLab3 key={item.label} item={item} />
            ))}
          </section>

          <section className="grid-4 flex items-center justify-around flex-col md:flex-row  gap-5 mt-5">
            {lab3.map((item) => (
              <GridLab3 key={item.label} item={item} />
            ))}
          </section>

          <section className="grid-4 flex items-center justify-around flex-col md:flex-row gap-5  mt-5">
            {lab41.map((item) => (
              <GridLab3 key={item.label} item={item} />
            ))}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Labrotiers;
