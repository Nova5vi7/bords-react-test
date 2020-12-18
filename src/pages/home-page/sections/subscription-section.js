import React from "react";

const Subscription = () => {
  return (
    <div className="subscription-section">
      <div className="subscription-section__wrap">
        <div className="subscription-section__content">
          <div className="subscription-section__text-wrap">
            <h2 className="subscription-section__title">
              Life's a <span>wawe</span>
            </h2>
            <p className="subscription-section__text">
              Surfing is highly addictive. It is one of the most popular board
              sports ever invented. There are over 20 million surfers in the
              world, and the number is growing fast.
            </p>
          </div>
          <div className="subscription-section__form-wrap">
            <form className="form">
              <input placeholder="Email Address" className="main-input" />
              <button className="button-square">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
