import "./Session.css";

function ShimmerSession() {
  return (
    <div className="session card text-center text-light mb-3 shimmerBG">
      <img
        style={{ width: "100%", height: "25vh", objectFit: "cover", visibility: "hidden" }}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <div className="card-text">
        </div>
      </div>
      <p className="card-subtitle mb-3"></p>
    </div>
  );
}

export default ShimmerSession;
