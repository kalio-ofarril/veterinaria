import "./ProductDetailTable.css";

import productData from "../../assets/productData.json";
import { useEffect, useState } from "react";

const ProductDetailTable = ({ productId }) => {
  const [productDetails, setProductDetails] = useState([[]]);

  useEffect(() => {
    let currProduct = {};

    productData.products.map((product) => {
      if (product.id === parseInt(productId)) {
        currProduct = product;
      }
      return product;
    });

    setProductDetails(currProduct.details);
  }, [productId]);

  return (
    <div className="container max-width product-details-table-container">
      <div className="row justify-content-center max-width">
        <div className="col-8">
          <h3>Especificaciones:</h3>
          <table className="table table-info">
            <tbody>
              {Object.keys(productDetails).map((key) => (
                <tr>
                  <td>{key}</td>
                  <td>{productDetails[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailTable;
