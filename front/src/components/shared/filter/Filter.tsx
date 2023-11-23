import { useState } from "react";
import "./Filter.css";

function Filter(props: any) {
  const years = props.data.map((session: any) => session.academicYear);
  const uniqueYears = [...new Set(years)];

  const [currentYear, setCurrentYear] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");

  const handleFilter = (search: String, year: String) => {
    var result = props.data;
    if (search === "" && year === "") {
      props.setter(result);
    } else if (search === "" && year !== "") {
      result = props.data.filter(
        (session: any) => session.academicYear === year
      );
      props.setter(result);
    } else if (search !== "" && year === "") {
      result = props.data.filter((session: any) =>
        session.title.toLowerCase().includes(search.toLowerCase())
      );
      props.setter(result);
    } else {
      result = props.data
        .filter((session: any) => session.academicYear === year)
        .filter((session: any) =>
          session.title.toLowerCase().includes(search.toLowerCase())
        );
      props.setter(result);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-2">
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            aria-label="Search by title"
            aria-describedby="button-addon2"
            onChange={(e) => {
              setCurrentSearch(e.target.value);
              handleFilter(e.target.value, currentYear);
            }}
          />
          <button className="btn" type="button" id="button-addon2">
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className="input-group mb-4 w-25">
          <select
            id="inputGroupSelect"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              setCurrentYear(e.target.value);
              handleFilter(currentSearch, e.target.value);
            }}
          >
            <option value="">All Years</option>
            {uniqueYears.map((year: any, index: any) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Filter;
