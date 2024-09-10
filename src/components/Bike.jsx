import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Price from "./ui/Price";
import Ratings from "./ui/Ratings";

const Bike = ({ bike }) => {
  const [img, setImg] = useState();

  // When we switch routes dont set image to unmounted component
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = bike.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };
    return () => {
      // When the component unmounts 
      mountedRef.current = false;
    };
  }, [bike.url]);

  return (
    <div className="bike">
      {!img ? (
        <>
          <div className="bike__img--skeleton"></div>
          <div className="skeleton bike__title--skeleton"></div>
          <div className="skeleton bike__rating--skeleton"></div>
          <div className="skeleton bike__price--skeleton"></div>
        </>
      ) : (
        <>
          <Link to={`/bikes/${bike.id}`}>
            <figure className="bike__img--wrapper">
              <img className="bike__img" src={img.src} alt="" />
            </figure>
          </Link>
          <div className="bike__title">
            <Link to={`/bikes/${bike.id}`} className="bike__title--link">
              {bike.title}
            </Link>
          </div>
          <Ratings rating={bike.rating} />
          <Price
            originalPrice={bike.originalPrice}
            salePrice={bike.salePrice}
          />
        </>
      )}
    </div>
  );
};

export default Bike;
