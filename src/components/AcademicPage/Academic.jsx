import React from 'react'
import "../../style/AcdemicPage/academic.css"

const Academic = () => {
  return (
    <div>

    <section className="bg-[#800000] w-full">
        <div className="flex items-center justify-center w-full p-5">
          <div className="w-full md:w-1/2 m-3 md:m-5">
            <div className="w-full border-l-2 border-[#FFD900]">
            

              <section className="px-6 flex items-center gap-3 mb-4">
                <h1 className="text-5xl font-bold font-fam text-white tracking-wide pl-12">
                  Our
                  <br />
                  Academics
                </h1>
              
              </section>
              
            </div>
          </div>

          <div className="md:w-1/2  hidden md:block academicStyle">
  {/*<img src={softwareApplication} alt="MUHS banner" />*/}
          </div>
        </div>
      </section>

      
    
    
    
    
    
    
    
    </div>
  )
}

export default Academic