import React from "react";

function NavLinks(aboutHref, offerHref, contactHref, classNameContact) {
  return (
    <>
      <a href={aboutHref}>o nas</a>
      <a href={offerHref}>oferta</a>
      <a href={contactHref} className={classNameContact}>
        kontakt
      </a>
    </>
  );
}

export default NavLinks;
