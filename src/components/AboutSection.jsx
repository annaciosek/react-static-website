import { employees } from "../data/Employees";

function AboutSection() {
  return (
    <section id="about-section">
      <div className="container">
        <h2>Nasi specjaliści</h2>
        {employees.map((employee) => {
          return (
            <div className="our-team" key={employee.id}>
              <div
                className="person"
                style={{ backgroundImage: `url(${employee.src})` }}
              ></div>
              <div className="person-description">
                <p className="strong space-bottom">
                  {employee.name} {employee.surname} – {employee.department}
                </p>
                <p>{employee.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AboutSection;
