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

  const CustomPrevArrow = ({ onClick }) => (
    <button className="slick-arrow  slick-prev fill-black" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Your arrow SVG path goes here */}
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="slick-arrow slick-next" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Your arrow SVG path goes here */}
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 200,
    autoplay: false,
    autoplaySpeed: autoPlaySpeed,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          centerMode: true,
        },
      },
      {
        breakpoint: 1200, // Extra large screens
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
          centerMode: true,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div tabIndex={0}>
      <Slider {...settings}>
        {cardsData.map((card, idx) => (
          <div className={`${getSlideClass(idx)}`} key={idx}>
            <Carousel
              key={idx}
              title={card.title}
              content={card.content}
              image={card.image}
              idx={idx}
              currentSlideV={currentSlide}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
