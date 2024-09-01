import { useParams } from "react-router-dom";

import "./DetailsPage.css";

import Footer from "../../Components/Footer/Footer";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";
import ProductDetailTable from "../../Components/ProductDetailTable/ProductDetailTable";

const DetailsPage = () => {
  const params = useParams();

  return (
    <div className="max-width full-height details-page-container">
      <ProductCarousel productId={params.productId} />
      <ProductDetailTable productId={params.productId} />
      <Footer />
    </div>
  );
};

export default DetailsPage;
