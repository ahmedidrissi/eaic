import "./Session.css";

function ShimmerSession() {
  return (
    <div className="card text-center text-light mb-3 animated-background">
      <div className="card-header">
        <h6></h6>
      </div>
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
      <div className="card-footer">
      </div>
    </div>
  );
}

export default ShimmerSession;
