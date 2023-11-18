import { Link } from "react-router-dom";
import ParticlesBackground from "../shared/particles/ParticlesBackground";
import { constants } from "../../constants/constants";
import "./Home.css";

function Home() {
  const basePath = constants.basePath;

  return (
    <>
      <ParticlesBackground />
      <section className="section hero" aria-label="home" id="home">
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
