import React from "react";

import Search from "../components/Home-Components/Search";

import Schedule from "../components/Home-Components/Schedule";
import MenuPanel from "../components/Home-Components/MenuPanel";
import Value from "../components/Home-Components/ValueService";
import MidBanner from "../components/Home-Components/MidBanner";
import Trending from "../components/Home-Components/Trending";
import Blog from "../components/Home-Components/blog";
import BottomBanner from "../components/Home-Components/BottomBanner";
import Support from "../components/Home-Components/support";
import Advertise from "../components/Home-Components/Advertise";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <>
      <div className="w-full px-5 mt-16 lg:w-full ">
        {/* <MidBanner
          image={require("../assets/BgBottom.jpg")}
          description={"THis is Description"}
        /> */}
        <MenuPanel />
        <Value />
        <Blog />

        {/* <BottomBanner /> */}
        <Support />

        <Trending />
        <BottomBanner />
        <Schedule />

        {/* <Advertise /> */}
        <Footer />

        <div className="h-1"></div>
      </div>
    </>
  );
}

export default Home;
