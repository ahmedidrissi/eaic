import DCD_logo_inverted from "../../../assets/DCD_logo_inverted.png";
import ENSIAS_AI_Club_logo_white_text from "../../../assets/ENSIAS_AI_Club_logo_white_text.png";
import x from "../../../assets/x.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const baseUrl = '/eaic-react-app/';

  return (
    <div className="navbar fixed-top navbar-expand-lg px-3">
      <div className="container-fluid">
        <div className="navbar-brand ms-lg-5">
          <Link
            to={baseUrl}
            style={{ textDecoration: "none" }}
          >
            <img
              src={ENSIAS_AI_Club_logo_white_text}
              alt="ENSIAS AI Club"
              width="130"
              className="d-inline-block align-text-center"
            />
          </Link>
          <a>
            <img
              src={x}
              alt=""
              width="40"
              className="d-inline-block align-text-center me-3"
            />
          </a>
          <a href="https://www.datacamp.com/donates" target="_blank">
            <img
              src={DCD_logo_inverted}
              alt="DataCamp Donates"
              width="126"
              className="d-inline-block align-text-center"
            />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={baseUrl}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={baseUrl + "about"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={baseUrl + "data"}>
                Data
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={baseUrl + "training"}>
                Training
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={baseUrl + "mlops"}>
                MLops
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={baseUrl + "contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
