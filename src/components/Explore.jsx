import React from 'react'
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <section id="explore">
        <div className="container">
            <div className="row row__column">
                <h2>
                    Explore more <span className="green">Bikes</span>
                </h2>
                <Link to="/bikes">
                    <button className="btn">Explore Bikes</button>
                </Link>
            </div>
        </div>
    </section>
  )
}
