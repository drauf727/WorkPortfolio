import Navigation from "./navigation";


function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <h1>David Rauf</h1>
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
          < Navigation />
      </nav>
    </>
  );
}

export default Header;
