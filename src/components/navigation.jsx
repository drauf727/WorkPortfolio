import { Link, useLocation } from 'react-router-dom';
import '../index.css'

function Navigation(){
    const currentPage = useLocation().pathname;
    return (
<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item">
  <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
  </li>
  <li className="nav-item">
  <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
  </li>
  <li className="nav-item">
  <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
         Contact
        </Link>
  </li>
  <li className="nav-item">
  <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
  </li>
</ul>
</div>
    )
}

export default Navigation