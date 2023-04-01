import React from "react";

function NavLinks({ aboutHref, servicesHref, contactHref, classNameContact }) {
  return (
    <>
      <a href={aboutHref}>o nas</a>
      <a href={servicesHref}>oferta</a>
      <a href={contactHref} className={classNameContact}>
        kontakt
      </a>
    </>
  );
}

export default NavLinks;
