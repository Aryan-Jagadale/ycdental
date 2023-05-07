import React from "react";
import { cr6_5 } from "../../../../content/NAAC/Criterias/Criteria6"

function Criteria6_5() {
  return (
    <div className="naccSection mx-3 my-5 w-[90%] flex-wrap flex items-center justify-center flex-row gap-5">
    {cr6_5.map((i) => (
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

export default Criteria6_5;
