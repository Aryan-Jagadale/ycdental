import React from "react";
import Collapsible from "react-collapsible";

const Accordian = ({ title,description }) => {
  return (
    <div className="mb-3">
    <Collapsible
      trigger={title}
      className="text-center bg-[#D9D9D9] text-lg p-2 tracking-wide font-fam"
      openedClassName="text-center border-2 border-black text-lg p-2 tracking-wide font-fam"
    >
      <p className="text-left text-base">
        {description}
      </p>
      
    </Collapsible>
    </div>
    
  );
};

export default Accordian;
