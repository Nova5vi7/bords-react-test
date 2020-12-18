import React from "react";
import SecondaryButton from "components/secondary-button";
import Slider from "components/slider";
import wetsuits from "products/wetsuits-products";

const WetsuitsSection = () => {
  return (
    <div className="product-section">
      <div className="product-section__container">
        <div className="product-section__content">
          <h1 className="product-section__title">Wetsuits</h1>
          <div className="product-section__text-wrap">
            <p className="product-section__text">
              A wetsuit is a garment, usually made of foamed neoprene, which is
              worn by surfers, divers, windsurfers, canoeists, and others
              engaged in water sports and other activities in or on water,
              primarily providing thermal insulation.
            </p>
            <SecondaryButton className="product-section__main-button" />
          </div>
        </div>
        <div className="product-section__slider">
          <Slider data={wetsuits} />
        </div>
      </div>
    </div>
  );
};

export default WetsuitsSection;
