import "./SimpleForm.css";

const SimpleForm = () => {
  return (
    <div className="container">
      <div className="footer-info-header">
        <h5>Contáctanos</h5>
      </div>
      <form
        target="_blank"
        action="https://formsubmit.co/kalio.ofvil@gmail.com"
        method="POST"
      >
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="col">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Mensaje"
            className="form-control"
            name="message"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-warning footer-form-btn">
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
