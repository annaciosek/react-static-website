import React from "react";
import background from "../assets/img/bg.jpg";

function HeroSection() {
  return (
    <section
      id="hero-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="hero">
          <h1 class="white">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p class="white">Nie wierz nam na słowo - sprawdź</p>
          <a href="#services-section">oferta</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
