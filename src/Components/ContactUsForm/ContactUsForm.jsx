import "./ContactUsForm.css";

const ContactUsForm = () => {
  return (
    <div className="container max-width contact-us-container">
      <div className="footer-info-header">
        <h1 className="contact-us-title">Contáctanos</h1>
      </div>
      <form
        target="_blank"
        action="https://formsubmit.co/kalio.ofvil@gmail.com"
        method="POST"
      >
        <div className="form-group">
          <div className="row justify-content-center max-width">
            <div className="col-sm-12 col-md-4">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="row justify-content-center max-width">
            <div className="col-sm-8">
              <textarea
                placeholder="Mensaje"
                className="form-control"
                name="message"
                rows="10"
                required
              ></textarea>
            </div>
          </div>
          <div className="row justify-content-center max-width">
            <div className="col-sm-8">
              <button type="submit" className="btn btn-warning footer-form-btn">
                ENVIAR
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
