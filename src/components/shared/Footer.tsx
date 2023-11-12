import ENSIAS_AI_Club_text from "../../assets/ENSIAS_AI_Club_text.png";
import ENSIAS_AI_Club_logo_white from "../../assets/ENSIAS_AI_Club_logo_white.png";

function Footer() {
  const year = 2023;

  return (
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-6 py-5 my-5 border-top bg-dark text-light">
      <div className="col mb-3"></div>

      <div className="col mb-3 d-flex flex-column align-items-center align-items-lg-start">
        <img src={ENSIAS_AI_Club_logo_white} width="126" alt="ENSIAS AI Club" />
        <img src={ENSIAS_AI_Club_text} width="126" alt="ENSIAS AI Club" />
      </div>

      <div className="col mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column align-items-center align-items-lg-start">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              Features
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              Pricing
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              FAQs
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              About
            </a>
          </li>
        </ul>
      </div>

      <div className="col mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column align-items-center align-items-lg-start">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              Features
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              Pricing
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              FAQs
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              About
            </a>
          </li>
        </ul>
      </div>

      <div className="col mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column align-items-center align-items-lg-start">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              Features
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              Pricing
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              FAQs
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-light">
              About
            </a>
          </li>
        </ul>
      </div>

      <div className="col mb-3"></div>
      {/* <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; {year} Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
        </ul>
      </div> */}
    </footer>
  );
}

export default Footer;
