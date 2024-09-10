import React from "react";
import { useParams } from "react-router";
import Ratings from "../components/ui/Ratings";
import Price from "../components/ui/Price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import BestBikes from "../components/ui/BestBikes";

const BikeInfo = ({ bikes, addItemToCart }) => {
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
                <Ratings rating={bike.rating} />
                <div className="bike__selected--price">
                  <Price
                    originalPrice={bike.originalPrice}
                    salePrice={bike.salePrice}
                  />
                </div>
                <div className="bike__summary">
                  <h3 className="bike__summary--title">Summary</h3>
                  <p className="bike__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus
                    neque provident alias iure nihil explicabo nobis id
                    voluptas.
                  </p>
                  <p className="bike__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus
                    neque provident alias iure nihil explicabo nobis id
                    voluptas.
                  </p>
                </div>
                <button className="btn" onClick={() => addItemToCart(bike)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bikes__container">
          <div className="row">
            <div className="bike__selected--top">
              <h2 className="bike__selected--title--top">Recommended Bikes</h2>
            </div>
            <BestBikes id={id} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default BikeInfo;
