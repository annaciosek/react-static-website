import React from "react";
import NavLinks from "./microComponents/NavLinks";

function Nav() {
  return (
    <header id="header">
      <div className="container">
        <a href="/" class="logo">
          moja firma
        </a>

        <div className="navigation">
          <NavLinks
            aboutHref="#about-section"
            servicesHref="#services-section"
            contactHref="#"
            classNameContact="contact"
          />
        </div>
      </div>
    </header>
  );
}

export default Nav;
