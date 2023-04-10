import Employees from "../data/Employees";
import photo1 from "../../src/assets/img/person-1.jpg";
import photo2 from "../../src/assets/img/person-2.jpg";

function AboutSection() {
  const employees = [
    {
      id: 1,
      name: "Maria",
      surname: "Marchewka",
      department: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
      src: photo1,
    },
    {
      id: 2,
      name: "Greta",
      surname: "Ogórek",
      department: "Social Media",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
      src: photo2,
    },
  ];

  return (
    <section id="about-section">
      <div className="container">
        <h2>Nasi specjaliści</h2>
        {employees.map((employee) => {
          return (
            <Employees
              key={employee.id}
              name={employee.name}
              surname={employee.surname}
              department={employee.department}
              description={employee.description}
              src={employee.src}
            />
          );
        })}
      </div>
    </section>
  );
}

export default AboutSection;
