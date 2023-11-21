import { useEffect, useState } from "react";
import Filter from "../shared/filter/Filter";
import Session from "../shared/session/Session";
import ShimmerSession from "../shared/session/ShimmerSession";
import { constants } from "../../constants/constants";

function Training() {
  const apiUrl = constants.apiUrl;

  const [trainingSessions, setTrainingSessions] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/sessions/cell/Training`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.sort((a: any, b: any) => {
          return b.academicYear - a.academicYear;
        });
        setTrainingSessions(data);
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
              Training Sessions
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Filter data={trainingSessions} setter={setFilter} />
            </div>
          </div>
          {filter.length > 0 ? (
            <div className="row">
              {filter.map((session: any) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={session._id}>
                  <Session {...session} />
                </div>
              ))}
            </div>
          ) : trainingSessions.length > 0 ? (
            <div className="row">
              {trainingSessions.map((session: any) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={session._id}>
                  <Session {...session} />
                </div>
              ))}
            </div>
          ) : (
            <div className="row">
              {[...Array(8)].map((_, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <ShimmerSession />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Training;
