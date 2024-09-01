import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container text-center header">
        <div className="row header">
          <div className="col-sm-12 col-md-1">
            <i className="bi bi-wrench-adjustable header-logo"></i>
          </div>
          <div className="col-sm-12 col-md-7"></div>
          <div className="col-sm-12 col-md-3 header-contact-data">
            <div>
              <div className="row">
                <div className="col">
                  <i className="bi bi-whatsapp whatsapp-header"></i>
                  <p className="header-info">
                    (+52) 3334888873 & (+52) 3339448999
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h5 className="header-slogan">
                    "Calidad, Valor y Servicio de Confianza"
                  </h5>
                </div>
              </div>
            </div>
            {/* <p className="header-info">
              Carlos fuero 615 col. Lomas del paradero c.p. 44840
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
