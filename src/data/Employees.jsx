function Employees({ name, surname, department, description, src }) {
  return (
    <div className="our-team">
      <div className="person" style={{ backgroundImage: `url(${src})` }}></div>
      <div className="person-description">
        <p className="strong space-bottom">
          {name} {surname} – {department}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Employees;
