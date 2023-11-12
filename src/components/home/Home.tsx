import "./Home.css";

function Home() {
  return (
    <>
      <section className="section hero" aria-label="home" id="home">
        <div className="container mt-5">
          <h1 className="hero-title">
            Welcome to <span className="span">ENSIAS AI Club </span>
          </h1>

          <p className="section-text">Where ideas become Reality</p>

          <a href="/about" className="btn">
            Who are we?
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
