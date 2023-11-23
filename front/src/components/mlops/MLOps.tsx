import { useEffect, useState } from "react";
import Filter from "../shared/filter/Filter";
import Session from "../shared/session/Session";
import ShimmerSession from "../shared/session/ShimmerSession";
import { constants } from "../../constants/constants";

function MLOps() {
  const apiUrl = constants.apiUrl;

  const [dataLoaded, setDataLoaded] = useState(false);
  const [mlopsSessions, setMlopsSessions] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/sessions/cell/MLOps`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataLoaded(true);
        setMlopsSessions(data);
        setFilter(data);
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
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Filter data={mlopsSessions} setter={setFilter} />
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
          ) : dataLoaded ? (
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="alert alert-secondary" role="alert">
                  No results found!
                </div>
              </div>
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

export default MLOps;
