import ENSIAS_AI_Club_text from "../../../assets/ENSIAS_AI_Club_text.png";
import ENSIAS_AI_Club_logo_white from "../../../assets/ENSIAS_AI_Club_logo_white.png";
import "./Footer.css";

function Footer() {
  const year = 2023;

  return (
    <footer className="container-fluid">
      <div className="footer-top row row-cols-1 row-cols-sm-2 row-cols-md-4 p-5 mx-lg-5 border-top border-dark text-light"> 

        <div className="col mb-3 d-flex flex-column align-items-center">
          <img
            src={ENSIAS_AI_Club_logo_white}
            width="126"
            alt="ENSIAS AI Club"
          />
          <img src={ENSIAS_AI_Club_text} width="126" alt="ENSIAS AI Club" />
        </div>

        <div className="col mb-3">
          <ul className="nav flex-column align-items-center">
            <li className="mb-2">
              <h5>ENSIAS</h5>
            </li>
            <li className="nav-item mb-2">
              <a
                href="http://ensias.um5.ac.ma/"
                className="nav-link p-0 text-light"
              >
                <i className="bi bi-chevron-right"></i> Website
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.linkedin.com/company/ensias/"
                className="nav-link p-0 text-light"
              >
                <i className="bi bi-chevron-right"></i> LinkedIn
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.facebook.com/ensias.official"
                className="nav-link p-0 text-light"
              >
                <i className="bi bi-chevron-right"></i> Facebook
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.instagram.com/ensias.official/?hl=fr"
                className="nav-link p-0 text-light"
              >
                <i className="bi bi-chevron-right"></i> Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <ul className="nav flex-column align-items-center">
            <li className="mb-2">
              <h5>ADEI ENSIAS</h5>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.linkedin.com/company/adei-ensias/"
                className="nav-link p-0 text-light"
              >
                <i className="bi bi-chevron-right"></i> LinkedIn
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.facebook.com/adei.ensias.3"
                className="nav-link p-0 text-light"
              >
                <i className="bi bi-chevron-right"></i> Facebook
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.instagram.com/adei.ensias/"
                className="nav-link p-0 text-light"
              >
                <i className="bi bi-chevron-right"></i> Instagram
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://twitter.com/des_adei"
                className="nav-link p-0 text-light"
              >
                <i className="bi bi-chevron-right"></i> Twitter
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <ul className="nav flex-column align-items-center">
            <li className="mb-2">
              <h5>Follow us</h5>
            </li>
            <li className="nav-item mb-3 d-flex justify-content-center align-items-center gap-2">
              <a
                href="https://www.instagram.com/ensias_ai_club/"
                className="nav-link p-0 text-light"
              >
                <i className="bi bi-instagram" style={{ fontSize: "40px" }}></i>
              </a>
              <a
                href="https://www.facebook.com/ensiasai"
                className="nav-link p-0 text-light"
              >
                <i className="bi bi-facebook" style={{ fontSize: "40px" }}></i>
              </a>
              <a
                href="https://www.linkedin.com/company/ensiasai/"
                className="nav-link p-0 text-light"
              >
                <i className="bi bi-linkedin" style={{ fontSize: "40px" }}></i>
              </a>
              <a
                href="https://github.com/ensias-ai-club/"
                className="nav-link p-0 text-light"
              >
                <i className="bi bi-github" style={{ fontSize: "40px" }}></i>
              </a>
            </li>
            <li className="mb-2">
              <h5>Contact Details</h5>
            </li>
            <li className="nav-item mb-2">
              <a href="mailto:ensias.ai.club@gmail.com">
                <i className="bi bi-envelope-at"></i> ensias.ai.club@gmail.com
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="tel:+212622406448">
                <i className="bi bi-telephone"></i> +212 6 22 40 64 48
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom text-light">
        <div className="copyright d-flex justify-content-center align-items-center py-4 border-top border-dark">
          <p>
            &copy; {year} ENSIAS AI Club <i className="bi bi-heart-fill"></i>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
