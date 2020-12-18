import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ data }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1788,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map(({ title, description, color, image, price }, indx) => {
        // console.log(itm);
        return (
          <div className="slide" key={indx}>
            <div className="slide__img-wrap">
              <img src={image} alt={`bord-${title}`} />
            </div>
            <div className="slide__content-wrap">
              <h5 className="slide__title">{title}</h5>
              <p className="slide__description">{description}</p>
              <div className="slide__price-wrap">
                <h6 className="slide__price-title">{color}</h6>
                <p className="slide__price">{`$${price}`}</p>
                <button className="primary-button">Add to bag</button>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderComponent;
