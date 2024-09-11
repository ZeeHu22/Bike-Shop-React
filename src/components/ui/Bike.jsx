import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Bike = ({ bike }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
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
              <img src={img.src} alt="" className="bike__img" />
            </figure>
          </Link>
          <div className="bike__title">
            <Link to={`/bikes/${bike.id}`} className="bike__title--link">
              {bike.title}
            </Link>
          </div>
          <Rating rating={bike.rating} />
          <Price
            salePrice={bike.salePrice}
            originalPrice={bike.originalPrice}
          />
        </>
      )}
    </div>
  );
};

export default Bike;
