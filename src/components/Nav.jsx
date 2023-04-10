function Nav() {
  return (
    <header id="header">
      <div className="container">
        <a href="/" className="logo">
          moja firma
        </a>

        <nav>
          <a href="#about-section">o nas</a>
          <a href="#services-section">oferta</a>
          <a href="/" className="contact">
            kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
