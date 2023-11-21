import "./Filter.css"

function Filter(props: any) {
  return (
    <div className="input-group mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search by title"
        aria-label="Search by title"
        aria-describedby="button-addon2"
        onChange={(e) => {
          const result = props.data.filter((session: any) =>
            session.title.toLowerCase().includes(e.target.value)
          );
          if (result.length > 0) props.setter(result);
        }}
      />
      <button
        className="btn"
        type="button"
        id="button-addon2"
      >
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
}

export default Filter;
