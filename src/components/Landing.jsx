import React from "react";
import unDraw from '../assets/undraw_ride_a_bicycle.svg';
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's most awarded online bike shop</h1>
            <h2>
              Find your dream bike with <span className="green">Bike Shop</span>
            </h2>
            <Link to="#features">
              <button className="btn">Browse bikes</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={unDraw} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
