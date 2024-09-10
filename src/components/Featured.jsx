import React from "react";
import Bike from "./ui/Bike";
import { bikes } from "../data";

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="green">Bikes</span>
          </h2>
          <div className="bikes">
            {bikes
            .filter((bike) => bike.rating === 5)
            .slice(0, 4)
            .map((bike) => (
                <Bike bike={bike} key={bike.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;