import { Link } from "react-router-dom";
import ParticlesBackground from "../shared/particles/ParticlesBackground";
import { constants } from "../../constants/constants";
import "./Home.css";

function Home() {
  const basePath = constants.basePath;
  // const news = [
  //   {
  //     text: "ENSIAS AI Club is organizing its second edition of the Data Competition on 22/01/2024. Register now!",
  //     link: "https://www.instagram.com/p/C2FpavoI2tx/",
  //   },
  //   {
  //     text: "The AI Day 2024 is coming soon! Follow us on Instagram to stay updated.",
  //     link: "https://www.instagram.com/ensias_ai_club/",
  //   }
  // ]

  return (
    <>
      <ParticlesBackground />
      <section className="section hero" aria-label="home" id="home">
        {/* <div className="w-100 breaking-news-container">
          <div className="row">
            <div className="col-md-12">
              <div className="breaking-news d-flex">
                <ul>
                  {news.map((news, index) => (
                    <li key={index}>
                      <i
                        className="bi bi-newspaper me-2"
                        style={{
                          color: "var(--color-8)",
                          fontSize: "1.1rem",
                        }}
                      ></i>
                      <a
                        href={news.link}
                        target="_blank"
                        style={{
                          textDecoration: "none",
                          color: "white",
                          textDecorationLine: "underline",
                        }}
                      >
                        {" "}
                        {news.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container mt-5">
          <h1 className="hero-title">
            Welcome to <span className="span">ENSIAS AI Club </span>
          </h1>
          <p className="section-text">Where ideas become Reality</p>
          <Link className="btn" to={basePath + "about"}>
            Who are we?
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
