import { InnerCaroComp1 } from "./InnerCaroComp";
import "../../style/HomePage/carosuel.css";
import { carousel1 } from "../../content/Home/Carousel";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "hidden" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "hidden" }}
      onClick={onClick}
    />
  );
}

const CarosuelComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <div className="carosuel">
        <Slider {...settings}>
          {carousel1.map((item) => (
            <InnerCaroComp1 backImg={item.caroselImg} key={item.caroselImg} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CarosuelComp;
