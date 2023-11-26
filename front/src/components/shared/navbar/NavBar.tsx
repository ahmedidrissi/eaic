import DCD_logo_inverted from "../../../assets/DCD_logo_inverted.png";
import ENSIAS_AI_Club_logo_white_text from "../../../assets/ENSIAS_AI_Club_logo_white_text.png";
import x from "../../../assets/x.png";
import { Link, useLocation } from "react-router-dom";
import { constants } from "../../../constants/constants";
import "./NavBar.css";

function NavBar() {
  const basePath = constants.basePath;
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <a
        className="close-navbar-toggler collapsed"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></a>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark px-3">
        <div className="container-fluid">
          <div className="navbar-brand ms-lg-5">
            <Link to={basePath} style={{ textDecoration: "none" }}>
              <img
                src={ENSIAS_AI_Club_logo_white_text}
                alt="ENSIAS AI Club"
                width="125"
                className="d-inline-block align-text-center"
              />
            </Link>
            <a className="x-logo">
              <img
                src={x}
                alt=""
                width="30"
                className="d-inline-block align-text-center me-3"
              />
            </a>
            <a
              href="https://www.datacamp.com/donates"
              target="_blank"
              className="dcd-logo"
            >
              <img
                src={DCD_logo_inverted}
                alt="DataCamp Donates"
                width="120"
                className="d-inline-block align-text-center"
              />
            </a>
          </div>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon-close"><i className="bi bi-x-lg"></i></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={
                    currentPath == "/" ? "nav-link active" : "nav-link"
                  }
                  to={basePath}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    currentPath == "/about" ? "nav-link active" : "nav-link"
                  }
                  to={basePath + "about"}
                >
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownSessions"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sessions
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownSessions"
                >
                  <li>
                    <Link
                      className={
                        currentPath == "/data" ? "dropdown-item active" : "dropdown-item"
                      }
                      to={basePath + "data"}
                    >
                      Data
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        currentPath == "/training" ? "dropdown-item active" : "dropdown-item"
                      }
                      to={basePath + "training"}
                    >
                      Training
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        currentPath == "/mlops" ? "dropdown-item active" : "dropdown-item"
                      }
                      to={basePath + "mlops"}
                    >
                      MLOps
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    currentPath == "/contact" ? "nav-link active" : "nav-link"
                  }
                  to={basePath + "contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
