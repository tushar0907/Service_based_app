import React from "react";
import MenuPanel from "../components/Home-Components/MenuPanel";
import Search from "../components/Home-Components/Search";

import Schedule from "../components/Home-Components/Schedule";
import Value from "../components/Home-Components/ValueService";
import MidBanner from "../components/Home-Components/MidBanner";
import Trending from "../components/Home-Components/Trending";
import BottomBanner from "../components/Home-Components/BottomBanner";
import Advertise from "../components/Home-Components/Advertise";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <>
      <div className=" w-full px-5 xl:px-0 xl:w-2/3">
        {/* <MenuPanel /> */}
        <Search />

        <Schedule />
        <Value />
        <MidBanner
          image={require("../assets/BgBottom.jpg")}
          description={"THis is Description"}
        />
        <Trending />
        <MidBanner
          image={require("../assets/BgEnd.jpg")}
          description={"THis is Description"}
        />
        <Advertise />
        <Footer />

        <div className="h-1"></div>
      </div>
    </>
  );
}

export default Home;
