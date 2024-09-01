import { useParams } from "react-router-dom";

import "./ProductPage.css";

import headerImage from "../../assets/imgs-slider/IndustrialMachine.jpg";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";
import Footer from "../../Components/Footer/Footer";

const ProductPage = () => {
  const params = useParams();

  return (
    <div className="full-height max-width">
      <div className="full-height max-width">
        <img
          key={headerImage}
          src={headerImage}
          className="product-page-header-image max-width"
          alt="Imagen no Disponible"
        />
        <ProductDisplay category={params.category} />
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
