import { useEffect, useState } from "react";
import useGetSessions from "../../../hooks/useGetSessions";
import Filter from "../../shared/filter/Filter";
import Session from "../session/Session";
import ShimmerSession from "../session/ShimmerSession";

function Data() {
  const [loading, setLoading] = useState(true);
  const [sessions, setSessions] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    useGetSessions("Data").then((sessions) => {
      setSessions(sessions);
      setFilter(sessions);
      setLoading(false);
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
              Data Cell
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Filter data={sessions} setter={setFilter} />
            </div>
          </div>
          {filter.length > 0 ? (
            <div className="row">
              {filter.map((session: any) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 gy-4"
                  key={session._id}
                >
                  <Session {...session} />
                </div>
              ))}
            </div>
          ) : loading ? (
            <div className="row">
              {[...Array(8)].map((_, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 gy-4" key={index}>
                  <ShimmerSession />
                </div>
              ))}
            </div>
          ) : (
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="alert alert-secondary" role="alert">
                  No results found!
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Data;
