import background from "../assets/img/bg.jpg";

function HeroSection() {
  return (
    <section
      id="hero-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="hero">
          <h1 className="white">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p className="white">Nie wierz nam na słowo - sprawdź</p>
          <a href="#services-section">oferta</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
