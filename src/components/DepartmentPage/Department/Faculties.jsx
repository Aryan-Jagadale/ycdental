import React from "react";
import { omrdLink } from "../../../utils/deptComp";



const Faculties = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                 
                  {/*<th scope="col" className="px-6 py-4">
                    First
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Last
  </th>*/}
                  
                </tr>
              </thead>
              <tbody>
              {
                omrdLink.map((item) => (

                    <tr key={item.name} className="border-b font-fam text-base dark:border-neutral-500">

                    <td className="whitespace-nowrap px-6 py-4 font-medium">{item.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.position}</td>
                    
                  </tr>    
                ))
              }
                
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculties;
