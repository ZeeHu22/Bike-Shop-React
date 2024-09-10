import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="green">Bike Shop</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="star" />}
              title="High Quality"
              para="Our bikes are sourced from highly-respected manufacturers."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="bicycle" />}
              title="A Bike for Everyone"
              para="Our wide selection allows you to pick the bike made for you."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="There is no middle-man so our bikes can be sold for unreasonably low."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
