import logo1 from "../../assets/logos/DC_Donates_logo_inverted.png";
import logo2 from "../../assets/logos/HPS_foundation.png";
import logo3 from "../../assets/logos/Fondation_Dislog_Group.png";
import logo4 from "../../assets/logos/SoGe.png";

const sponsors = [logo1, logo2, logo3, logo4];

function Sponsors() {
  return (
    <div className="container mt-4">
      <h2 className="text-center">They Trusted Us</h2>
      <div className="row px-5 py-4">
        {sponsors.map((img, index) => (
          <div className="col gy-4 d-flex justify-content-center align-items-center" key={index}>
            <div
              className="card p-4 d-flex justify-content-center align-items-center"
              style={{ width: "250px", height: "100px", backgroundColor: "var(--color-6)" }}
            >
              <img height={"100%"} src={img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
