import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Features from "../components/Featured";
import CheapestBikes from "../components/CheapestBikes";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <Features />
        <CheapestBikes />
        <Explore />
      </main>
    </>
  );
};

export default Home;
