import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Bike = ({ bike }) => {
  return (
    <div className="bike">
        <Link to={`/bikes/${bike.id}`}>
            <figure className="bike__img--wrapper">
                <img src={bike.url} alt="" className="bike__img" />
            </figure>
        </Link>
        <div className="bike__title">
            <Link to={`/bikes/${bike.id}`} className="bike__title--link">
                {bike.title}
            </Link>
        </div>
        <Rating rating={bike.rating} />
        <Price salePrice={bike.salePrice} originalPrice={bike.originalPrice}/>
    </div>
  );
};

export default Bike;