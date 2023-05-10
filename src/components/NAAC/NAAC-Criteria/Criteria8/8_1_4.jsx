import React from "react";
import { _8_1_4 } from "../../../../content/NAAC/Criterias/Criteria8"

function Criteria8_1_4() {
  return (
    <div className="naccSection mx-3 my-5 w-[90%] flex-wrap flex items-center justify-center flex-row gap-5">
    {_8_1_4.map((i) => (
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

export default Criteria8_1_4;
