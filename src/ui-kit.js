import React from "react";

const uiKit = () => {
  return (
    <div className="ui-kit">
      <div className="ui-kit__container">
        <div className="ui-kit__typography">
          <h3 className="ui-kit__title typography">Typography</h3>
          <div className="ui-kit__wrap-title">
            <h1 className="ui-kit__tytle-type-h1">H1 - Muli Black 110</h1>
            <h2 className="ui-kit__tytle-type-h2">H2 - Muli Black 45</h2>
            <h3 className="ui-kit__tytle-type-h3">H3 - Muli Bold 35</h3>
            <h4 className="ui-kit__tytle-type-h4">H4 - Muli Regular 20</h4>
          </div>
          <div className="ui-kit__wrap-text">
            <p className="ui-kit__text-size-20px">Text 1 - Muli Light 20</p>
            <p className="ui-kit__text-size-14px">Text 2 - Muli Light 14</p>
          </div>
        </div>
        <div className="ui-kit__colors">
          <h3 className="ui-kit__title colors">Main colors</h3>
          <div className="ui-kit__colors-wrap">
            <div className="ui-kit__color-primary"></div>
            <div className="ui-kit__color-black"></div>
            <div className="ui-kit__color-white"></div>
          </div>
        </div>
        <div className="ui-kit__form">
          <h3 className="ui-kit__title input">Input</h3>
          <div className="ui-kit__form-wrap">
            <form className="form">
              <input placeholder="Email Address" className="main-input" />
              <button className="button-square">SUBMIT</button>
            </form>
          </div>
        </div>
        <div className="ui-kit__button-primary">
          <h3 className="ui-kit__title title-primary">Primary button</h3>
          <div className="ui-kit__button-wrap">
            <button className="primary-button">Add to bag</button>
          </div>
        </div>
        <div className="ui-kit__button-secondary">
          <h3 className="ui-kit__title title-secondary">Secondary button</h3>
          <div className="ui-kit__button-wrap">
            <button className="secondary-button">See all products</button>
          </div>
        </div>
        <div className="ui-kit__menu-item">
          <h3 className="ui-kit__title title-menu">Menu</h3>
          <ul className="menu">
            <li className="menu-item">
              <button className="item">Bords</button>
            </li>
            <li className="menu-item">
              <button className="item">Wetsuits</button>
            </li>
            <li className="menu-item">
              <button className="item">Outlets</button>
            </li>
            <li className="menu-item">
              <button className="item">Explore</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default uiKit;
