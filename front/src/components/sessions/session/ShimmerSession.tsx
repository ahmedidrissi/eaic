import "./Session.css";

function ShimmerSession() {
  return (
    <div className="session card text-center text-light mb-3 shimmerBG">
      <img style={{ visibility: "hidden" }} className="card-img-top" />
      <div className="card-body" style={{ visibility: "hidden" }}>
        <div className="type mb-2 mt-1">
          <span className="badge py-2">Type</span>
        </div>
        <h5 className="card-title">Loading ...</h5>
        <div className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem laboriosam non impedit dicta nobis libero minus ipsa
          esse nesciunt, rerum animi saepe ipsam sequi.
        </div>
      </div>
      <p className="card-subtitle mb-3" style={{ visibility: "hidden" }}>
        Loading ...
      </p>
    </div>
  );
}

export default ShimmerSession;
