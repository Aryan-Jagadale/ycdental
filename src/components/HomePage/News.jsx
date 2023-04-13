import React, { useState } from "react";
import Add from "../../assets/icons/add.png";
import NewsInnerComp from "./NewsInnerComp";
import "../../style/HomePage/news.css";
import Slider from "react-slick";
import NewsTopComp from "./NewsTopComp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


const News = () => {
  const [setIsChange] = useState(false);

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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
    display: "none",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
    duration: 2000,
  };

  //console.log(isChange);

  return (
    <div className=" bg-[#EFEFEF] py-5 px-5 sm:px-10">
      <div className="flex items-end w-full py-3">
        <section className="w-[100%] flex items-center justify-center md:w-[60%] ">
          <div className="bg-[#00205B] border-2 border-black w-[100%] flex items-center justify-center p-2 px-3 md:w-[15vw]">
            <h3 className="text-2xl font-bold uppercase tracking-wide text-[#FFF614] font-fam">
              Top News
            </h3>
          </div>
        </section>

        <section className="w-[0%] flex items-center justify-end md:w-[40%] ">
          <div className="h-[35px] w-[35px] bg-[#00205B] items-center justify-center hidden md:flex">
            <LazyLoadImage effect="opacity" src={Add} alt={"Add button"} />
          </div>
        </section>
      </div>

      <div className="">
        <div className="flex items-center w-full my-3 gap-2 flex-col-reverse md:flex-row  ">
          <section className="w-[100%] flex items-center gap-3 md:gap-5 h-full  flex-col m-3 md:w-[60%]">
            <div className="small_carousel md:h-[28vh] w-full p-0 md:p-5">
              <Slider {...settings}>
                <NewsTopComp />
                <NewsTopComp />
                <NewsTopComp />
              </Slider>
            </div>

            <div className="auto_scroll mt-32 sm:mt-[5.5rem] lg:mt-6">
              <section className="max-h-[300px] shadow-lg border-2 max-w-[650px] py-2  overflow-hidden m-2 md:m-4 sm:max-h-[200px]">
                <div className="text-center">
                  <h3 className="font-bold text-lg uppercase">Other</h3>
                  <hr className="mb-5" />
                </div>

                <section id="scroll-container">
                  <div id="scroll-text">
                    <NewsInnerComp />
                   
                  </div>
                </section>
              </section>
            </div>
          </section>

          <section className="w-[100%] h-full md:w-[40%]">
            <div className="p-0 md:p-5 border border-[#FFD900]">
              <Slide {...properties}>
                <LazyLoadImage
                  effect="opacity"
                  src={
                    "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681211069/YCDENTAL/images/NewsImages/2_qsdozk.jpg"
                  }
                  alt="newsImage"
                  className="m-0 h-full w-full object-cover "
                />
                <LazyLoadImage
                  effect="opacity"
                  src={
                    "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681211152/YCDENTAL/images/NewsImages/News_xczpno.jpg"
                  }
                  alt="newsImage"
                  className="m-0 h-full w-full object-cover "
                />

                <LazyLoadImage
                  effect="opacity"
                  src={
                    "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681211068/YCDENTAL/images/NewsImages/1_s8tboi.jpg"
                  }
                  alt="newsImage"
                  className="m-0 h-full w-full object-cover "
                />
                <LazyLoadImage
                  effect="opacity"
                  src={
                    "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681211068/YCDENTAL/images/NewsImages/3_w7clt3.jpg"
                  }
                  alt="newsImage"
                  className="m-0 h-full w-full object-cover "
                />
                <LazyLoadImage
                  effect="opacity"
                  src={
                    "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681211068/YCDENTAL/images/NewsImages/4_eyl7to.jpg"
                  }
                  alt="newsImage"
                  className="m-0 h-full w-full object-cover "
                />
                <LazyLoadImage
                  effect="opacity"
                  src={
                    "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681288476/YCDENTAL/images/NewsImages/IMG-20221221-WA0012_d4tkrk.jpg"
                  }
                  alt="newsImage"
                  className="m-0 h-full w-full object-cover "
                />
              </Slide>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default News;
