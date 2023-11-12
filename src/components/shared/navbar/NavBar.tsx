import DCD_logo_inverted from "../../../assets/DCD_logo_inverted.png";
import ENSIAS_AI_Club_logo_white_text from "../../../assets/ENSIAS_AI_Club_logo_white_text.png";
import x from "../../../assets/x.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar fixed-top navbar-expand-lg px-3">
      <div className="container-fluid">
        <a className="navbar-brand ms-lg-5" href="#">
          <img
            src={ENSIAS_AI_Club_logo_white_text}
            alt="ENSIAS AI Club"
            width="130"
            className="d-inline-block align-text-center"
          />
          <img
            src={x}
            alt=""
            width="40"
            className="d-inline-block align-text-center me-3"
          />
          <img
            src={DCD_logo_inverted}
            alt="DataCamp Donates"
            width="126"
            className="d-inline-block align-text-center"
          />
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Data
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Training
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                MLops
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
