import React from "react";
import { cr4_4_2 } from "../../../../../content/NAAC/Criterias/Criteria4"

function Criteria4_16() {
  return (
    <div className="naccSection mx-3 my-5 w-[90%] flex-wrap flex items-center justify-center flex-row gap-5">
    {cr4_4_2.map((i) => (
      <a
        // key={i}
        href={i.url}
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

export default Criteria4_16;