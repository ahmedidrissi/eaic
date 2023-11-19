import { useEffect, useState } from "react";
import Session from "../shared/session/Session";
import { constants } from "../../constants/constants";

function MLOps() {
  const apiUrl = constants.apiUrl;

  const [mlopsSessions, setMlopsSessions] = useState([]);

  useEffect(() => {
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMlopsSessions(data);
      });
  }, []);

  return (
    <>
      <section className="section data" aria-label="data" id="data">
        <div className="container">
          <div className="title-wrapper mb-4">
            <h2
              className="headline-md section-title text-center"
              id="collection-label"
            >
              MLOps Sessions
            </h2>
          </div>
          {/* check if dataSessions is empty */}
          {mlopsSessions.length > 0 ? (
            <div className="row">
            {mlopsSessions.map((session: any) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={session._id}>
                <Session {...session} />
              </div>
            ))}
          </div>
          ) : (
            <div className="row">
              <div className="col-12">
                <p className="text-center text-light">No MLOps Sessions Available</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default MLOps;