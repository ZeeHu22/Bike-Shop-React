import { bikes } from "../../data";
import React from "react";
import Bike from "../Bike";

const BestBikes = ({ id }) => {
  return (
    <div className="bikes">
      {bikes
        .filter((bike) => {
          if (id) {
            // Check for id when on the individual bike
            // so the same bike isnt recommended
            return bike.rating === 5 && bike.id != id;
          }
          return bike.rating === 5;
        })
        .slice(0, 4)
        .map((bike) => {
          return <Bike bike={bike} key={bike.id} />;
        })}
    </div>
  );
};

export default BestBikes;
