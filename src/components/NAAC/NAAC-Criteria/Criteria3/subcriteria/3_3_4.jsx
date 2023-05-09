import React from "react";
import { cr3_3_4 } from "../../../../../content/NAAC/Criterias/Criteria3"

function Criteria3_9() {
  return (
    <div className="naccSection mx-3 my-5 w-[90%] flex-wrap flex items-center justify-center flex-row gap-5">
    {cr3_3_4.map((i) => (
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

export default Criteria3_9;