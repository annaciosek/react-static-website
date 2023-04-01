import React from "react";
import photo1 from "../../assets/img/person-1.jpg";
import photo2 from "../../assets/img/person-2.jpg";

function Employees() {
  const employees = [
    {
      id: 1,
      name: "Maria",
      surname: "Marchewka",
      department: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
      photo: { photo1 },
    },
    {
      id: 2,
      name: "Greta",
      surname: "Ogórek",
      department: "Social Media",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
      photo: { photo2 },
    },
  ];

  return (
    <>
      {employees.map((employee) => (
        <div className="our-team">
          <div
            className="person"
            // style={{ backgroundImage: `url(${employee.photo})` }}
          ></div>
          <div className="person-description">
            <p className="strong space-bottom">
              {employee.name} {employee.surname} – {employee.department}
            </p>
            <p>{employee.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Employees;
