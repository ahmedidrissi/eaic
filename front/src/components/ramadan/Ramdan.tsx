import ramadan_karim from "../../assets/ramadan_karim.jpg";

function Ramdan() {
  return (
    <section className="ramadan d-flex justify-content-center align-items-center">
      <img
        src={ramadan_karim}
        alt="Ramadan Kareem"
        className="img-fluid"
        style={{maxHeight: "calc(100vh - 150px)"}}
      />
    </section>
  );
}

export default Ramdan;
