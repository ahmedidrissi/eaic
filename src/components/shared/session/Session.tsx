
function Session(session: any) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{session.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{session.cell}</h6>
        <p className="card-text">{session.type}</p>
        <img src={session.image} alt="" />
        <p className="card-text">{session.speackers}</p>
        <p className="card-text">{session.tags}</p>
      </div>
    </div>
  )
}

export default Session