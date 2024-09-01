import { useNavigate } from "react-router-dom";
import SimpleForm from "../SimpleForm/SimpleForm";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="container footer-container max-width">
      <div className="row justify-content-center max-width footer-row">
        <div className="col-sm-12 col-md-2 footer-col">
          <div className="footer-info-header">
            <h5 className="special-header">Servicio Industrial Alimenticio</h5>
          </div>
          <div>
            <p className="footer-info">+52 3334888873</p>
            <p className="footer-info">+52 3339448999</p>
            <p className="footer-info">
              Carlos fuero 615 col. Lomas del paradero c.p. 44840
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-2 footer-col">
          <div className="footer-info-header">
            <h5>Accesos</h5>
          </div>
          <div>
            <p
              className="footer-info-link"
              onClick={() => {
                window.scrollTo(0, 75);
                navigate("/");
              }}
            >
              Inicio
            </p>
            <p
              className="footer-info-link"
              onClick={() => {
                window.scrollTo(0, 75);
                navigate("/catalog/corte");
              }}
            >
              Equipo de Corte
            </p>
            <p
              className="footer-info-link"
              onClick={() => {
                window.scrollTo(0, 75);
                navigate("/catalog/proceso");
              }}
            >
              Equipo de Proceso
            </p>
            <p
              className="footer-info-link"
              onClick={() => {
                window.scrollTo(0, 75);
                navigate("/catalog/empacado");
              }}
            >
              Equipo de Empacado
            </p>
            <p
              className="footer-info-link"
              onClick={() => {
                window.scrollTo(0, 75);
                navigate("/contact");
              }}
            >
              Contacto
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-2 footer-col">
          <div className="footer-info-noheader">
            {/* <p className="footer-info">+52 3334888873</p>
            <p className="footer-info">+52 3339448999</p>
            <p className="footer-info">
              Carlos fuero 615 col. Lomas del paradero c.p. 44840
            </p> */}
          </div>
        </div>
        <div className="col-sm-12 col-md-3  footer-col footer-form">
          <SimpleForm />
        </div>
      </div>
      <div className="row justify-content-evenly footer-water-mark">
        <div className="col-2 footer-water-mark-text">
          <i className="bi bi-c-circle"></i>
          Servicio Industrial Alimenticio
        </div>
        <div className="col-3 footer-water-mark"></div>
        <div className="col-1 footer-water-mark">
          <i className="bi bi-facebook footer-icon"></i>
          <i className="bi bi-whatsapp footer-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
