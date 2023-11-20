import { constants } from "../../constants/constants";
import "./Contact.css";

function Contact() {

  const apiUrl = constants.apiUrl;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    e.target.name.value = "";
    const email = e.target.email.value;
    e.target.email.value = "";
    const message = e.target.message.value;  
    e.target.message.value = "";  
    const data = {
      name,
      email,
      message,
    };
    fetch(`${apiUrl}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        alert("Your message has been sent successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong, please try again later");
      });
  };

  return (
    <>
      <section className="section contact" aria-label="contact" id="contact">
        <div className="container">
          <div className="title-wrapper">
            <h2
              className="headline-md section-title text-center"
              id="collection-label"
            >
              Contact Us
            </h2>
          </div>
          {/* two blocs */}
          <div className="row px-lg-5 py-3">
            <div className="col-md-6">
              <div className="contact-info p-5 mb-2">
                <div className="contact-info-item mb-5">
                  <h5>
                    <i className="bi bi-envelope-at"></i> Email
                  </h5>
                  <a href="mailto:ensias.ai.club@gmail.com">
                    ensias.ai.club@gmail.com
                  </a>
                </div>
                <div className="contact-info-item mb-5">
                  <h5>
                    <i className="bi bi-telephone"></i> Phone
                  </h5>
                  <a href="tel:+212622406448">+212 6 22 40 64 48</a>
                </div>
                <div className="contact-info-item">
                  <h5>
                    <i className="bi bi-geo-alt"></i> Address
                  </h5>
                  <a
                    href="https://maps.app.goo.gl/EnkZiCeiJubcdzhv7"
                    target="_blank"
                  >
                    Avenue Mohamed Ben Abdellah, Avenue Regragui, 10112 Rabat
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="contact-form text-center p-5">
                <h5 className="mb-4">Send us a message</h5>
                <form
                  className="form-wrapper"
                  name="contact-form"
                  method="POST"
                  onSubmit={handleSubmit}
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <div className="form-group mb-2">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      defaultValue={""}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-round px-3"
                      type="submit"
                      name="submit"
                      id="submit"
                      value="Submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
