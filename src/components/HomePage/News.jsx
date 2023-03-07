import React, { useState } from "react";
import Add from "../../assets/icons/add.png";
import NewsInnerComp from "./NewsInnerComp";
import NewsImage from "../../assets/images/news.png";
import "../../style/HomePage/news.css";
import Slider from "react-slick";
import NewsTopComp from "./NewsTopComp";



const News = () => {
  const [isChange, setIsChange] = useState(false);

  const handleNextNewsAndImage = (onClick) => {
    setIsChange(true);
    onClick();
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={() => handleNextNewsAndImage(onClick)}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  console.log(isChange);

  return (
    <div className=" bg-[#EFEFEF] py-5 px-5 sm:px-10">
      <div className="flex items-end w-full py-3">
        <section className="w-[100%] flex items-center justify-center md:w-[60%] ">
          <div className="bg-[#00205B] border-2 border-black w-[50%] flex items-center justify-center p-2 md:w-[15vw]">
            <h3 className="text-lg font-bold uppercase tracking-wide text-[#FFF614]">
              Top News
            </h3>
          </div>
        </section>

        <section className="w-[0%] flex items-center justify-end md:w-[40%] ">
          <div className="h-[35px] w-[35px] bg-[#00205B] items-center justify-center hidden md:flex">
            <img src={Add} alt={"Add button"} />
          </div>
        </section>
      </div>

      <div className="">
        <div className="flex items-center w-full my-3 gap-2 flex-col-reverse md:flex-row  ">
          <section className="w-[100%] flex items-center justify-center flex-col m-3 md:w-[60%]">

            <div className="small_carousel h-[28vh] w-full p-0 md:p-5">

              <Slider {...settings}>
                <NewsTopComp />
                <NewsTopComp />
                <NewsTopComp />
              </Slider>
            </div>


            <div className="auto_scroll mt-32 sm:mt-[5.5rem] lg:mt-6">
              <section className="max-h-[300px] shadow-lg border-2 max-w-[650px] py-2  overflow-hidden m-4 sm:max-h-[200px]">
                <div className="text-center">
                  <h3 className="font-bold text-lg uppercase">Other</h3>
                  <hr className="mb-5" />
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

          <section className="w-[100%] h-full md:w-[40%]">
            <div className="p-5 border border-[#FFD900]">
              <img src={NewsImage} alt="newsImage" className="m-0" />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default News;