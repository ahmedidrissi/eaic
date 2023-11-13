import { Link } from "react-router-dom";
import ParticlesBackground from "../shared/particles/ParticlesBackground";
import "./Home.css";

function Home() {
  const baseUrl = "/eaic-react-app/";

  return (
    <>
      <ParticlesBackground />
      <section className="section hero" aria-label="home" id="home">
        <div className="container mt-5">
          <h1 className="hero-title">
            Welcome to <span className="span">ENSIAS AI Club </span>
          </h1>

          <p className="section-text">Where ideas become Reality</p>

          <Link className="btn" to={baseUrl + "about"}>
            Who are we?
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
