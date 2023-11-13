import './Session.css';

function Session(session: any) {
  return (
    <div className="card text-center text-light mb-3">
      <img
        src={session.image ? session.image : "https://via.placeholder.com/400"}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{session.title}</h5>
        <p className="card-subtitle">{session.type}</p>
        {/* <p className="card-text">{session.speakers}</p> */}
        <p className="card-text">{session.tags}</p>
      </div>
    </div>
  );
}

export default Session;
