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
    dots: true,
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
    <div className="h-screen bg-[#EFEFEF] py-5 px-10">
      <div className="flex items-end w-full py-3">
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
          <section className="w-[60%] flex items-center justify-center flex-col gap-3">
            <div className="small_carousel h-[28vh] w-full my-3 p-5">

              <Slider {...settings}>
                <NewsTopComp />
                <NewsTopComp />
                <NewsTopComp />
              </Slider>
            </div>

            <div className="auto_scroll">
              <section className="max-h-[200px] shadow-lg border-2 max-w-[650px] py-2  overflow-hidden">
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
