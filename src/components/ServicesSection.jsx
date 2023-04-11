import { offers } from "../data/SingleService";

function ServicesSection() {
  return (
    <section id="services-section">
      <div className="container">
        <h2 className="white">Czym zajmuje się nasza firma?</h2>
        <div className="services">
          {offers.map((offer) => {
            return (
              <div className="services-single" key={offer.id}>
                <h3>{offer.title}</h3>
                <div
                  className={`${offer.isNew ? "services-single-isNew" : ""}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
