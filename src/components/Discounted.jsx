import React from 'react';
import { bikes } from '../data';
import Bike from './ui/Bike';

export default function Discounted() {
  return (
    <section id="recent">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Discount <span className="green">Bikes</span>
                </h2>
                <div className="bikes">
                    {bikes
                    .filter(bike => bike.salePrice)
                    .slice(0, 8)
                    .map((bike) => (
                        <Bike bike={bike} key={bike.id} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
