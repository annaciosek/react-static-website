import React from "react";
import SingleService from "./microComponents/SingleService";

const offers = [
  {
    id: 1,
    title: "Usługa 1",
    isNew: true,
  },
  {
    id: 2,
    title: "Usługa 2",
    isNew: false,
  },
  {
    id: 3,
    title: "Usługa 3",
    isNew: false,
  },
  {
    id: 4,
    title: "Usługa 4",
    isNew: false,
  },
  {
    id: 5,
    title: "Usługa 5",
    isNew: false,
  },
  {
    id: 6,
    title: "Usługa 6",
    isNew: false,
  },
];

function ServicesSection() {
  return (
    <section id="services-section">
      <div className="container">
        <h2 className="white">Czym zajmuje się nasza firma?</h2>
        <div className="services">
          {offers.map((offer) => {
            return <SingleService title={offer.title} isNew={offer.isNew} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
