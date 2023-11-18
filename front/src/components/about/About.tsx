import "./About.css";

function About() {
  return (
    <>
      <section className="section about" aria-label="about" id="about">
        <div className="container">
          <div className="title-wrapper">
            <h2
              className="headline-md section-title text-center"
              id="collection-label"
            >
              About Us
            </h2>
          </div>
          <p style={{ textAlign: "justify", fontSize: "15pt" }}>
            We are a group of Moroccan university students passionate about
            Artificial Intelligence (AI). Our club is dedicated to exploring the
            many possibilities of AI and its applications in a wide range of
            fields. We are committed to helping our members develop their
            knowledge and understanding of AI, as well as providing a platform
            for them to share their ideas and experiences. Our goal is to
            provide a safe and encouraging environment for our members to
            explore AI and gain practical experience in AI technologies. We look
            forward to creating a community of like-minded individuals who are
            eager to learn and share their insights.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
