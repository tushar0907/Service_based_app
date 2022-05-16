import MenuPanel from "../Home-Components/MenuPanel";
import Search from "../Home-Components/Search";
import Quotes from "../Home-Components/Quotes";
import Schedule from "../Home-Components/Schedule";
import Value from "../Home-Components/ValueService";
import MidBanner from "../Home-Components/MidBanner";
import Trending from "../Home-Components/Trending";
import BottomBanner from "../Home-Components/BottomBanner";
import Advertise from "../Home-Components/Advertise";
import Footer from "../Home-Components/Footer";

import React from "react";

const Main = () => {
  return (
    <div>
      <MenuPanel />
      <Search />
      <Quotes />
      <Schedule />
      <Value />
      <MidBanner />
      <Trending />
      <BottomBanner />
      <Advertise />
      <Footer />
    </div>
  );
};

export default Main;
