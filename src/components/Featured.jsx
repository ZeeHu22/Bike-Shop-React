import React from "react";
import Bike from "./Bike";
import BestBikes from "./ui/BestBikes";

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="green">Bikes</span>
          </h2>
          <BestBikes />
        </div>
      </div>
    </section>
  );
};

export default Featured;
