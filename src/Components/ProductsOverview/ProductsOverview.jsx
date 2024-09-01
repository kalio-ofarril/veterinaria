import "./ProductsOverview.css";

import image from "../../assets/imgs-slider/maxresdefault.jpg";
import productData from "../../assets/productData.json";
import { useNavigate } from "react-router-dom";

const ProductsOverview = () => {
  const navigate = useNavigate();

  return (
    <div className="container products-overview-container max-width">
      <div className="row justify-content-center max-width">
        <div className="col product-overview-title">
          <h1>Equipo</h1>
        </div>
      </div>
      <div className="row justify-content-center max-width">
        <div
          className="col-sm-12 col-md-3 product-overview-col"
          onClick={() => navigate(`/catalog/proceso`)}
        >
          <div className="product-overview-img">
            <img
              key={image}
              src={image}
              className="about-us-image"
              alt="Imagen no Disponible"
            />
          </div>
          <h3 className="product-overview-text">
            {productData.productsDisplayHeader["proceso"]}
          </h3>
        </div>
        <div
          className="col-sm-12 col-md-3 product-overview-col"
          onClick={() => navigate(`/catalog/corte`)}
        >
          <div className="product-overview-img">
            <img
              key={image}
              src={image}
              className="about-us-image"
              alt="Imagen no Disponible"
            />
          </div>
          <h3 className="product-overview-text">
            {productData.productsDisplayHeader["corte"]}
          </h3>
        </div>
        <div
          className="col-sm-12 col-md-3 product-overview-col"
          onClick={() => navigate(`/catalog/empacado`)}
        >
          <div className="product-overview-img">
            <img
              key={image}
              src={image}
              className="about-us-image"
              alt="Imagen no Disponible"
            />
          </div>
          <h3 className="product-overview-text">
            {productData.productsDisplayHeader["empacado"]}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductsOverview;
