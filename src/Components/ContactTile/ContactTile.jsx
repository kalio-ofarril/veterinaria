import { useNavigate } from "react-router-dom";
import "./ContactTile.css";

const ContactTile = () => {
  const navigate = useNavigate();

  return (
    <div className="container contact-tile-container">
      <div className="row justify-content-center about-us-contact">
        <div className="col-sm-12 col-md-1">
          <i className="bi bi-clipboard2-check-fill contact-title-icon"></i>
        </div>
        <div className="col-sm-12 col-md-4">
          <div>
            <h5>Equipo de la más alta calidad</h5>
            <h3>Nos esforzamos día a día en satsifacer a nuestros clientes</h3>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 contact-title-btn-container">
          <button
            type="button"
            className="btn btn-warning contact-title-btn"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/contact");
            }}
          >
            SOLICITA UNA COTIZACIÓN
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactTile;
