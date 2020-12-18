import React from "react";
import { connect } from "react-redux";
import IntroSection from "components/intro";
import CategoriesSection from "./categories";
import BordSection from "./bord-section";
import WetsiutsSection from "./wetsuits-section";
import Subscription from "./subscription-section";
import ExploreSection from "./section-explore";

const HomePage = () => {
  return (
    <div className="home-page">
      <IntroSection />
      <CategoriesSection />
      <BordSection />
      <WetsiutsSection />
      <Subscription />
      <ExploreSection />
    </div>
  );
};

export default connect(null, null)(HomePage);
