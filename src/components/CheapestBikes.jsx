import React from "react";
import Bike from "./Bike";
import { bikes } from "../data";

const Features = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="green">Bikes</span>
          </h2>
          <div className="bikes">
            {bikes
              .slice()
              .filter(bike => bike.salePrice > 0)
              .slice(0, 8)
              .map((bike) => (
                <Bike bike={bike} key={bike.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;