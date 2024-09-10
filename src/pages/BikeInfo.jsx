import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";

export default function BikeInfo({ bikes }) {
    const { id } = useParams();
    const bike = bikes.find((bike) => +bike.id === +id);
  
    return (
    <div id="bikes__body">
      <main id="bikes__main">
        <div className="bikes__container">
          <div className="row">
            <div className="bike__selected--top">
              <Link to="/bikes" className="bike__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/bikes" className="bike__link">
                <h2 className="bike__selected--title--top">Bikes</h2>
              </Link>
            </div>
            <div className="bike__selected">
              <figure className="bike__selected--figure">
                <img className="bike__selected--img" src={bike.url} alt="" />
              </figure>
              <div className="bike__selected--description">
                <h2 className="bike__selected--title">{bike.title}</h2>
                <Rating rating={bike.rating} />
                <div className="bike__selected--price">
                  <Price
                    originalPrice={bike.originalPrice}
                    salePrice={bike.salePrice}
                  />
                </div>
                <div className="bike__summary">
                  <h3 className="bike__summary--title">Product Detail</h3>
                  <p className="bike__summary--para">
                    {bike.para}
                  </p>
                </div>
                {/* <button className="btn" onClick={() => addItemToCart(bike)}>
                  Add to Cart
                </button> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bikes__container">
          <div className="row">
            <div className="bike__selected--top">
              <h2 className="bike__selected--title--top">Recommended Bikes</h2>
            </div>
            <BestBikes id={id} />
          </div>
        </div> */}
      </main>
    </div>
  );
}
