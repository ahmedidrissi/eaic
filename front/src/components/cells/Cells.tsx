import "./Cells.css";

function Cells() {
  return (
    <>
      <section className="section cells">
        <div className="container">
          <h2 className="text-center">Our Cells</h2>
          <div className="pills d-flex align-items-center px-lg-5 py-4 ">
            <div
              className="nav nav-pills nav-fill nav-justified flex-column gap-1 gap-lg-2 gap-md-2 me-2 me-lg-3 me-md-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active"
                id="v-pills-data-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-data"
                type="button"
                role="tab"
                aria-controls="v-pills-data"
                aria-selected="true"
              >
                <i className="bi bi-bar-chart-line"></i> Data
              </button>
              <button
                className="nav-link"
                id="v-pills-training-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-training"
                type="button"
                role="tab"
                aria-controls="v-pills-training"
                aria-selected="false"
              >
                <i className="bi bi-laptop"></i> Training
              </button>
              <button
                className="nav-link"
                id="v-pills-mlops-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-mlops"
                type="button"
                role="tab"
                aria-controls="v-pills-mlops"
                aria-selected="false"
              >
                <i className="bi bi-infinity"></i> MLOps
              </button>
              <button
                className="nav-link"
                id="v-pills-sponsoring-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-sponsoring"
                type="button"
                role="tab"
                aria-controls="v-pills-sponsoring"
                aria-selected="false"
              >
                <i className="bi bi-suit-heart"></i> Sponsoring
              </button>
              <button
                className="nav-link"
                id="v-pills-events-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-events"
                type="button"
                role="tab"
                aria-controls="v-pills-events"
                aria-selected="false"
              >
                <i className="bi bi-calendar-event"></i> Events
              </button>
              <button
                className="nav-link"
                id="v-pills-media-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-media"
                type="button"
                role="tab"
                aria-controls="v-pills-media"
                aria-selected="false"
              >
                <i className="bi bi-camera"></i> Media
              </button>
              <button
                className="nav-link"
                id="v-pills-design-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-design"
                type="button"
                role="tab"
                aria-controls="v-pills-design"
                aria-selected="false"
              >
                <i className="bi bi-palette"></i> Design
              </button>
            </div>
            <div className="tab-content p-3" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-data"
                role="tabpanel"
                aria-labelledby="v-pills-data-tab"
              >
                <div className="bg-icon">
                  <i className="bi bi-bar-chart-line"></i>
                </div>
                <h3>Data Cell</h3>
                <p>
                  Our aim is to make you assimilate the basics of data science,
                  data analytics through training projects and courses.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-training"
                role="tabpanel"
                aria-labelledby="v-pills-training-tab"
              >
                <div className="bg-icon">
                  <i className="bi bi-laptop"></i>
                </div>
                <h3>Training Cell</h3>
                <p>
                  Our goal is to enhance your skills and knowledge in the field
                  of artificial intelligence with a "Learning-by-Doing"
                  approach.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-mlops"
                role="tabpanel"
                aria-labelledby="v-pills-mlops-tab"
              >
                <div className="bg-icon">
                  <i className="bi bi-infinity"></i>
                </div>
                <h3>MLOps Cell</h3>
                <p>
                  Our aim is to equip you with the essential tools and
                  techniques to ensure seamless integration of machine learning
                  models into real-world applications.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-sponsoring"
                role="tabpanel"
                aria-labelledby="v-pills-sponsoring-tab"
              >
                <div className="bg-icon">
                  <i className="bi bi-suit-heart"></i>
                </div>
                <h3>Sponsoring Cell</h3>
                <p>
                  We take care of contacting the companies to guarantee the
                  necessary resources to maintain the success of the events and
                  activities.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-events"
                role="tabpanel"
                aria-labelledby="v-pills-events-tab"
              >
                <div className="bg-icon">
                  <i className="bi bi-calendar-event"></i>
                </div>
                <h3>Events Cell</h3>
                <p>
                  Your creative idea can be realized in the events cell which
                  oversees the realization of club events (hackathons,
                  competitions ...) in their entirety.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-media"
                role="tabpanel"
                aria-labelledby="v-pills-media-tab"
              >
                <div className="bg-icon">
                  <i className="bi bi-camera"></i>
                </div>
                <h3>Media Cell</h3>
                <p>
                  Our mission is to manage the club's social networks. This
                  mainly involves covering the various club events, ensuring
                  that each event gets the media coverage it deserves.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-design"
                role="tabpanel"
                aria-labelledby="v-pills-design-tab"
              >
                <div className="bg-icon">
                  <i className="bi bi-palette"></i>
                </div>
                <h3>Design Cell</h3>
                <p>
                  Takes care of the creation of all the posters and videos that
                  you see in our social networks, so it will allow you to
                  express your hidden artistic sense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cells;
