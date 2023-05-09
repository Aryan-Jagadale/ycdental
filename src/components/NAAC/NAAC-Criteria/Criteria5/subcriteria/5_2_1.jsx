import React from "react";
import { _5_2_1 } from "../../../../../content/NAAC/Criterias/Criteria5"

function Criteria5_2_1() {
  return (
    <div className="naccSection mx-3 my-5 w-[90%] flex-wrap flex items-center justify-center flex-row gap-5">
      {_5_2_1.map((i) => (
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

export default Criteria5_2_1;