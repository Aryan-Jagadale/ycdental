import React from "react";
import Collapsible from "react-collapsible";

const AccordianLayout = ({ title, description }) => {
  return (
    <div className="mb-3">
      <Collapsible
        trigger={title}
        open="true"
        className="text-center font-bold bg-[#D9D9D9] text-lg p-2 tracking-wide font-fam"
        openedClassName="text-center font-bold border border-[#FFD900] text-lg p-2 tracking-wide font-fam"
      >
        <p className="text-left bg-white ">{description}</p>
      </Collapsible>
    </div>
  );
};

export default AccordianLayout;
