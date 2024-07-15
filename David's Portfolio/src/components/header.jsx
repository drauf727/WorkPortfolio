function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1>David Rauf</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <h4>About</h4>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <h4>Portfolio</h4>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <h4>Contact</h4>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <h4>Resume</h4>
                </a>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
}

export default Header;
