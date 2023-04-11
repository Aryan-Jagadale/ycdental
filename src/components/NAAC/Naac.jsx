import React from 'react'
import "../../style/NAAC/naac.css"

function Naac() {
  return (
    <div>
      <section className="flex md:w-[30%] naacBg" id="">
        <div className="flex items-center justify-center w-full p-0 md:shrink-0">
          <div className="w-full md:w-[30%] m-3 md:m-5">
            <div className="md:block w-full">
              <section className="flex items-center ">
                <h1 className="mt-18 flex text-lg md:text-5xl border-b-2 sm:text-lg
                border-[#ffffff]  font-bold font-fam text-white tracking-wide ">
                  NAAC
                  <br />
                  Achievement
                </h1>
              </section>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Naac