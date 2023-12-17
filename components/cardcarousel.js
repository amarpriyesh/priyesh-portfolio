import Slider from "react-slick";
import Carousel from "./carousel";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
// ... other imports

const CardCarousel = ({ cardsData, autoPlaySpeed = 2000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const getSlideClass = (index) => {
    return index === currentSlide ? "slide-current" : "slide-blurred";
  };
  

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 200,
    autoplay: true,
    autoplaySpeed: autoPlaySpeed,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
      // ... other responsive settings
    ],
  };

  return (
    <div  tabIndex={0}>
      <Slider {...settings}>
        {cardsData.map((card, idx) => (
          <div  className={getSlideClass(idx)} key={idx}>
          <Carousel key={idx} title={card.title} content={card.content} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
