import "./About.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/ai_day_1.jfif";
import img2 from "../../assets/ai_day_2.jfif";
import img3 from "../../assets/ai_day_3.jfif";
import img4 from "../../assets/ai_day_4.jfif";
import img5 from "../../assets/ai_day_5.jfif";
import img6 from "../../assets/ai_day_6.jfif";

function About() {
  return (
    <>
      <section className="section about" aria-label="about" id="about">
        <div className="container">
          <h2 className="text-center">About Us</h2>
          <p
            style={{ textAlign: "justify", fontSize: "15pt" }}
            className="px-5 py-3"
          >
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

          <h2 className="text-center">Our Event</h2>
          <div className="container p-3 d-flex justify-content-center">
            <div
              className="carousel py-3"
              id="events"
              style={{ maxWidth: "600px" }}
            >
              <Carousel
                showThumbs={false}
                showArrows={false}
                infiniteLoop={true}
                autoPlay={true}
                stopOnHover={true}
                showStatus={false}
                swipeable={true}
                width={"100%"}
              >
                <div>
                  <img src={img1} width={"200px"} />
                </div>
                <div>
                  <img src={img2} width={"200px"} />
                </div>
                <div>
                  <img src={img3} width={"200px"} />
                </div>
                <div>
                  <img src={img4} width={"200px"} />
                </div>
                <div>
                  <img src={img5} width={"200px"} />
                </div>
                <div>
                  <img src={img6} width={"200px"} />
                </div>
              </Carousel>
            </div>
          </div>
          <h2 className="text-center">Q&A</h2>
          <div className="container p-3 d-flex justify-content-center">
            <div className="accordion" id="qna">
              <div className="accordion-item mb-1">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#qnaOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is our motivation ?
                  </button>
                </h2>
                <div
                  id="qnaOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#qna"
                >
                  <div className="accordion-body">
                    We want to spread the AI culture through our campus and
                    create a safe and motivating environment for AI enthusiasts.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-1">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#qnaTwo"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Where do we work?
                  </button>
                </h2>
                <div
                  id="qnaTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#qna"
                >
                  <div className="accordion-body">
                    In our school ENSIAS based in Rabat.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#qnaThree"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How can you help us?
                  </button>
                </h2>
                <div
                  id="qnaThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#qna"
                >
                  <div className="accordion-body">
                    You can sponsor an event or suggest a formation in a topic
                    of your choice related to AI.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
