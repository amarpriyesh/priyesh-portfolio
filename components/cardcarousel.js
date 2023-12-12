import Slider from "react-slick";
import Carousel from "./carousel";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
// ... other imports

const CardCarousel = ({ cardsData, autoPlaySpeed = 2000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 200,
    autoplay: true,
    autoplaySpeed: autoPlaySpeed,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
      // ... other responsive settings
    ],
  };

  return (
    <div  tabIndex={0}>
      <Slider {...settings}>
        {cardsData.map((card, idx) => (
          <Carousel key={idx} title={card.title} content={card.content} />
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
