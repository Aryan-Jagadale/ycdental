import React from "react";
import { _2_1_2 } from "../../../../../content/NAAC/Criterias/Criteria2"

function Criteria2_2() {
  return (
    <div className="naccSection mx-3 my-5 w-[90%] flex-wrap flex items-center justify-center flex-row gap-5">
    {_2_1_2.map((i) => (
      <a
        // key={i}
        href={i.pdf}
        target={"_blank"}
        rel="noreferrer"
        className="font-bold pdf-main-card"
      >
        <p className="pdfnametag">{i.name}</p>
      </a>
    ))}
  </div>
  );
}

export default Criteria2_2;