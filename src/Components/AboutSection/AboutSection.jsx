import "./AboutSection.css";
import image from "../../assets/imgs-slider/maxresdefault.jpg";

const AboutSection = () => {
  return (
    <div className="about-section-container">
      <div className="container about-section-container">
        <div className="row justify-content-center no-side-margin">
          <div className="col-sm-12 col-md-4">
            <h1>Acerca S.I.A.</h1>
          </div>
          <div className="col-sm-12 col-md-4"></div>
        </div>
        <div className="row justify-content-center about-us-row no-side-margin">
          <div className="col-sm-12 col-md-4">
            <img
              key={image}
              src={image}
              className="about-us-image"
              alt="Imagen no Disponible"
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <h3>Servicio Industrial Alimenticio</h3>
            <p className="about-us-p">
              En el año 1985 comenzamos fabricando refacciones a una empresa de
              reparación de equipo para alimentos. A partir de 1990 empezamos a
              dar servicio por cuenta propia a carnicerías, obradores, rastros,
              cremerías etc. Con el tiempo seguimos creciendo y se nos dio la
              oportunidad de ampliar nuestros servicios a la compra, venta y
              refacciones de maquinaria. En el año 2000 nos otorgaron contratos
              para prestar servicios preventivos y correctivos a los
              departamentos de salchichonería y carne de varias prestigiosas
              cadenas de autoservicio. En el año 2004 se creó una S.A. de C.V.
              la cual estuvo en funcionamiento hasta principios del año 2018.
              Actualmente operamos bajo el nombre de SIA (Servicio Industrial
              Alimenticio) y además de prestar servicios de mantenimiento,
              compra, venta y consignación de maquinaria y refacciones, también
              fabricamos refacciones y maquinaria al gusto del cliente.
            </p>
          </div>
        </div>
        {/* <div className="row justify-content-center no-side-margin">
          <div className="col-sm-12 col-md-3">
            <h3>consectetuer</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient
              mauris pretium natoque augue pretium integer facilisis. Mauris
              condimentum eros dui eget penatibus fames facilisis iaculis. Proin
              eget quisque primis orci ultrices sodales ex phasellus. At ante
              sed magna mi quisque facilisis.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <h3>consectetuer</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient
              mauris pretium natoque augue pretium integer facilisis. Mauris
              condimentum eros dui eget penatibus fames facilisis iaculis. Proin
              eget quisque primis orci ultrices sodales ex phasellus. At ante
              sed magna mi quisque facilisis.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <h3>consectetuer</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient
              mauris pretium natoque augue pretium integer facilisis. Mauris
              condimentum eros dui eget penatibus fames facilisis iaculis. Proin
              eget quisque primis orci ultrices sodales ex phasellus. At ante
              sed magna mi quisque facilisis.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection;
