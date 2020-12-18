import React from "react";
import male from "images/male.png";
import female from "images/female.png";
import bord from "images/bord.png";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__container">
        <div className="categories__wraper">
          <div className="categories__wrap-male">
            <h1 className="categories__title">Wetsuits</h1>
            <img src={male} alt="male" />
          </div>
          <div className="categories__wrap-female">
            <h1 className="categories__title">Outlets</h1>
            <img src={female} alt="female" />
          </div>
        </div>

        <div className="categories__wrap-bord">
          <h1 className="categories__title bords-title">Bords</h1>
          <img src={bord} alt="bord" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
