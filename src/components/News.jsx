import React from "react";
import Add from "../icons/add.png";
import NewsInnerComp from "./NewsInnerComp";
import NewsImage from "../images/news.png";
import "./news.css";


const News = () => {
  return (
    <div className="h-screen bg-[#EFEFEF] py-5 px-10">
      <div className="flex items-end w-full">
        <section className="w-[60%] flex items-center justify-center ">
          <div className="bg-[#00205B] border-2 border-black w-[15vw] flex items-center justify-center p-2">
            <h3 className="text-lg font-bold uppercase tracking-wide text-[#FFF614]">
              Top News
            </h3>
          </div>
        </section>

        <section className="w-[40%] flex items-center justify-end ">
          <div className="h-[35px] w-[35px] bg-[#00205B] flex items-center justify-center">
            <img src={Add} alt={"Add button"} />
          </div>
        </section>
      </div>

      <div className="">
        <div className="flex items-center w-full my-3 ">
          <section className="w-[60%] flex items-center justify-center flex-col">
          
            <div className="small_carousel h-[28vh] my-3 border-[#00205B] border-2">


              <div className="max-h-[300px] max-w-[650px] p-12">


                  <section className="text-center">
                    <p className="font-normal tracking-wide">
                      YCDC Girl's cricket team enters final round of the Sinhgad
                      Crick fest at Pune with a smashing victory against current
                      national champions PDU Solapur.
                    </p>
                  </section>

                  </div>
                  
                  
                  </div>


            <div className="auto_scroll">
              <section className="max-h-[200px] shadow-lg border-2 max-w-[500px] py-2  overflow-hidden">
                <div className="text-center">
                  <h3 className="font-bold text-lg uppercase">Other</h3>
                  <hr />
                </div>

                <section id="scroll-container">
                  <div id="scroll-text">
                    <NewsInnerComp />
                    <NewsInnerComp />
                    <NewsInnerComp />
                    <NewsInnerComp />
                  </div>
                </section>
              </section>
            </div>
          </section>

          <section className="w-[40%] h-full">
            <div className="p-5 border border-[#FFD900]">
              <img src={NewsImage} alt="newsImage" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default News;
