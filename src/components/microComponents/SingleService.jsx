import React from "react";

function SingleService({ title, isNew }) {
  return (
    <div class="services-single">
      <h3>{title}</h3>
      <div className={`${isNew ? "services-single-isNew" : ""}`}></div>
    </div>
  );
}

export default SingleService;
