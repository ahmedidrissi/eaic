import "./Session.css";

function Session(session: any) {
  return (
    <div className="session card text-center text-light mb-3">
      <img
        src={session.image ? session.image : "https://via.placeholder.com/400"}
        className="card-img-top"
        loading="lazy"
      />
      <div className="card-body">
        <div className="type mb-2 mt-1">
          <span className="badge py-2">{session.type}</span>
        </div>
        <h5 className="card-title">{session.title}</h5>
        <div className="card-text">
          By
          {session.speakers.map((speaker: any, index: any) => {
            return (
              <div key={index}>
                {speaker}
              </div>
            );
          })}
        </div>
      </div>
      <small className="card-subtitle mb-3">{session.academicYear}</small>
      <div className="card-footer">
        <a href={session.file} className="btn btn-sm w-100" download>
          Download
        </a>
      </div>
      {/* 
      <img
        src={session.image ? session.image : "https://via.placeholder.com/400"}
        className="card-img-top"
        loading="lazy"
      />
      <div className="card-body">
        <div className="type mb-2">
          <span className="badge py-2">{session.type}</span>
        </div>
        <h5 className="card-title">{session.title}</h5>
      </div>
      <p className="card-subtitle mb-3">{session.academicYear}</p>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <small>By {session.speakers.join(", ")}</small>
        <a href={session.file} className="btn" download>
          <i className="bi bi-download"></i>
        </a>
      </div>
      */}
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
