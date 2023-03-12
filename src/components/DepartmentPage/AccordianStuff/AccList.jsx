import React from "react";
import {
  ormedRadioAcademicCal,
  ormedRadioNewLetter,
} from "../../../utils/Department";

const AccList = ({ title }) => {
  if (title === "NewsLetter And Magazine") {
    return (
      <ul className="p-3">
        {ormedRadioNewLetter.map((item, index) => (
          <li key={item.label} className=" font-fam m-3 ">
            <span className="mr-1">{index + 1}.</span>
            <span className="">{item.label}</span>
            {item.isLink && (
              <a
                href={item.link}
                target={"_blank"}
                rel="noreferrer"
                className="text-blue-600 ml-3"
              >
                View
              </a>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="p-3">
      {ormedRadioAcademicCal.map((item, index) => (
        <li key={item.label} className=" font-fam m-3 ">
          <span className="mr-1">{index + 1}.</span>
          <span>{item.label}</span>
          {item.isLink && (
            <a
              href={item.link}
              target={"_blank"}
              rel="noreferrer"
              className="text-blue-600 ml-3"
            >
              View
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default AccList;
