import { useEffect, useState } from "react";
import Session from "../shared/session/Session";

function Data() {

  const [dataSessions, setDataSessions] = useState([]);

  useEffect(() => {
    fetch("sessions/data.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setDataSessions(data.sessions);
      });
  }, []);
  
  return (
    <>
      <section className="section data" aria-label="data" id="data">
        <div className="container">
          <div className="title-wrapper">
            <h2
              className="headline-md section-title text-center"
              id="collection-label"
            >
              Data session
            </h2>
          </div>
          <div className="row">
            {dataSessions.map((session: any) => (
              <div className="col-md-4" key={session.id}>
                <Session {...session} />
              </div>
            ))}
        </div>
      </div>
      </section>
    </>
  );
}

export default Data;
