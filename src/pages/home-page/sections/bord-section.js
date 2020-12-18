import React, { useState, useEffect } from "react";
import getProducts from "helpers/get-products";
import { connect } from "react-redux";
import actions from "store/actions";
import SecondaryButton from "components/secondary-button";
import Slider from "components/slider";

const BordSection = ({ products, setProducts }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, [setProducts]);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="product-section">
      <div className="product-section__container">
        <div className="product-section__content">
          <h1 className="product-section__title">Bords</h1>
          <div className="product-section__text-wrap">
            <p className="product-section__text">
              A surfboard is an elongated platform used in surfing. Surfboards
              are relatively light, but are strong enough to support an
              individual standing on them while riding an ocean wave.
            </p>
            <SecondaryButton className="product-section__main-button" />
          </div>
        </div>
        <div className="product-section__slider">
          <Slider data={products} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});

const mapDispatchToProps = (dispatch) => ({
  setProducts: (products) => {
    dispatch(actions.setProducts(products));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BordSection);
