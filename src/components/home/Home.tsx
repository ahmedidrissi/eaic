import NavBar from "../shared/navbar/NavBar";
import Footer from "../shared/footer/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />

      <section className="section hero" aria-label="home" id="home">
        <div className="container">
          <h1 className="hero-title">
            Welcome to <span className="span">ENSIAS AI Club </span>
          </h1>

          <p className="section-text">Where ideas become Reality</p>

          <a href="/about" className="btn">
            Who are we?
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
