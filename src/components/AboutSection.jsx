import React from "react";
import Employees from "./microComponents/Employees";

function AboutSection() {
  return (
    <section id="about-section">
      <div class="container">
        <h2>Nasi specjaliści</h2>
        <Employees />
      </div>
    </section>
  );
}

export default AboutSection;
