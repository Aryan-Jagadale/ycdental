import React from "react";
import Collapsible from "react-collapsible";

const AccordianLayout = ({ title, description }) => {
  return (
    <div className="mb-3">
      <Collapsible
        trigger={title}
        open="true"
        className="text-center bg-[#FFD900] text-lg p-2 tracking-wide font-fam"
        openedClassName="text-center bg-[#FFD900] border border-[#FFD900] text-lg p-2 tracking-wide font-fam"
      >
        <p className="text-left bg-white ">{description}</p>
      </Collapsible>
    </div>
  );
};

export default AccordianLayout;
