import "./Session.css";

function Session(session: any) {
  return (
    <div className="session card text-center text-light mb-3">
      <div className="card-header">
        <h6 style={{ textTransform: "uppercase" }}>{session.type}</h6>
      </div>
      <div className="card-img">
        <img
          src={
            session.image ? session.image : "https://via.placeholder.com/400"
          }
          className="card-img-top"
          style={{ height: "100%", objectFit: "cover" }}
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{session.title}</h5>
        <div className="card-text">
          {session.speakers.map((speaker: any, index: any) => {
            return (
              <div key={index}>
                <h6>{speaker}</h6>
              </div>
            );
          })}
        </div>
      </div>
      <p className="card-subtitle mb-3">{session.academicYear}</p>
      <div className="card-footer">
        <a href={session.file} className="btn btn-sm w-100" download>
          Download
        </a>
      </div>
      {/* <div className="card-footer">
        {session.tags.map((tag: any, index: any) => {
          return (
            <button key={index} className="btn btn-sm m-1">
              {tag}
            </button>
          );
        })}
      </div> */}
    </div>
  );
}

export default Session;