import ENSIAS_AI_Club_text from "../../assets/ENSIAS_AI_Club_text.png";
import ENSIAS_AI_Club_logo_white from "../../assets/ENSIAS_AI_Club_logo_white.png";

function Footer() {
  const year = 2023;

  return (
    <footer className="container-fluid">
      <div className="footer-top row row-cols-1 row-cols-sm-2 row-cols-md-6 py-5 border-top bg-dark text-light">
        <div className="col mb-3"></div>

        <div className="col mb-3 d-flex flex-column align-items-center align-items-lg-start">
          <img
            src={ENSIAS_AI_Club_logo_white}
            width="126"
            alt="ENSIAS AI Club"
          />
          <img src={ENSIAS_AI_Club_text} width="126" alt="ENSIAS AI Club" />
        </div>

        <div className="col mb-3">
          <ul className="nav flex-column align-items-center align-items-lg-start">
            <li className="mb-2">
              <h5>ENSIAS</h5>
            </li>
            <li className="nav-item mb-2">
              <a
                href="http://ensias.um5.ac.ma/"
                className="nav-link p-0 text-light"
              >
                Website
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.linkedin.com/company/ensias/"
                className="nav-link p-0 text-light"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.facebook.com/ensias.official"
                className="nav-link p-0 text-light"
              >
                Facebook
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.instagram.com/ensias.official/?hl=fr"
                className="nav-link p-0 text-light"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <ul className="nav flex-column align-items-center align-items-lg-start">
            <li className="mb-2">
              <h5>ADEI ENSIAS</h5>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.linkedin.com/company/adei-ensias/"
                className="nav-link p-0 text-light"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.facebook.com/adei.ensias.3"
                className="nav-link p-0 text-light"
              >
                Facebook
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.instagram.com/adei.ensias/"
                className="nav-link p-0 text-light"
              >
                Instagram
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://twitter.com/des_adei"
                className="nav-link p-0 text-light"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <ul className="nav flex-column align-items-center align-items-lg-start">
            <li className="mb-2">
              <h5>Follow us</h5>
            </li>
            <li className="nav-item mb-3 d-flex justify-content-center align-items-center">
              <a
                href="https://www.instagram.com/ensias_ai_club/"
                className="nav-link p-0 text-light"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/7c3bed/instagram-new--v1.png"
                  width="50"
                  height="40"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.facebook.com/ensiasai"
                className="nav-link p-0 text-light"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/7c3bed/facebook--v1.png"
                  width="50"
                  height="40"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/ensiasai/"
                className="nav-link p-0 text-light"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/7c3bed/linkedin.png"
                  width="50"
                  height="40"
                  loading="lazy"
                />
              </a>
              <a
                href="https://github.com/ensias-ai-club/"
                className="nav-link p-0 text-light"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/7c3bed/github.png"
                  width="50"
                  height="40"
                  loading="lazy"
                />
              </a>
            </li>
            <li className="mb-2">
              <h5>Contact Details</h5>
            </li>
            <li className="nav-item mb-2">
              <a
                href="mailto:ensias.ai.club@gmail.com"
                className="text-decoration-none"
              >
                ensias.ai.club@gmail.com
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="tel:+212622406448" className="text-decoration-none">
                +212 6 22 40 64 48
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3"></div>
      </div>

      <div className="footer-bottom bg-dark text-light">
        <div className="d-flex flex-column flex-sm-row justify-content-center py-4 border-top">
          <p>&copy; {year} ENSIAS AI Club ❤ All rights reserved.</p>
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
