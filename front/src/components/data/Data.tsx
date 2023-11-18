import { useEffect, useState } from "react";
import Session from "../shared/session/Session";
import { constants } from "../../constants/constants";

function Data() {
  const apiUrl = constants.apiUrl;

  const [dataSessions, setDataSessions] = useState([]);

  useEffect(() => {
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataSessions(data);
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
              Data Sessions
            </h2>
          </div>
          {/* check if dataSessions is empty */}
          {dataSessions.length > 0 ? (
            <div className="row">
            {dataSessions.map((session: any) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={session._id}>
                <Session {...session} />
              </div>
            ))}
          </div>
          ) : (
            <div className="row">
              <div className="col-12">
                <p className="text-center text-light">No data sessions available</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Data;
