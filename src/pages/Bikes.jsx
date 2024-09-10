import React, { useState, useEffect } from "react";
import Bike from "../components/Bike";

const Bikes = ({ bikes: initalBikes }) => {
  const [bikes, setBikes] = useState();

  useEffect(() => {
    setBikes(initalBikes);
  }, [initalBikes]);

  function filterBikes(filter) {
    switch (filter) {
      case "LOW_TO_HIGH":
        return setBikes(
          bikes
            .slice()
            .sort(
              (a, b) =>
                (a.salePrice || a.originalPrice) -
                (b.salePrice || b.originalPrice)
            )
        );
      case "HIGH_TO_LOW":
        return setBikes(
          bikes
            .slice()
            .sort(
              (a, b) =>
                (b.salePrice || b.originalPrice) -
                (a.salePrice || a.originalPrice)
            )
        );
      case "RATING":
        return setBikes(bikes.slice().sort((a, b) => b.rating - a.rating));
      default:
        break;
    }
  }

  return (
    <div id="bikes__body">
      <main id="bikes__main">
        <section>
          <div className="bikes__container">
            <div className="row">
              <div className="bikes__header">
                <h2 className="section__title bikes__header--title">
                  All Bikes
                </h2>
                <select
                  id="filter"
                  onChange={(event) => filterBikes(event.target.value)}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="bikes">
                {bikes && bikes.map((bike) => {
                  return <Bike bike={bike} key={bike.id} />;
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Bikes;
