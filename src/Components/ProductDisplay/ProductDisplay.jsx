import "./ProductDisplay.css";

import productData from "../../assets/productData.json";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductDisplay = ({ category }) => {
  const [productList, setProductList] = useState([[]]);
  const [imageMap, setImageMap] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const images = require.context("../../assets/imgs-products", true);
    const imageList = images.keys().map((image) => {
      let imgKey = image
        .toString()
        .split(".")
        [image.toString().split(".").length - 2].substring(1);
      let obj = {};
      obj[imgKey.toString()] = images(image);
      return obj;
    });

    let imgMap = {};

    imageList.map((imageData) => {
      imgMap[Object.keys(imageData)[0]] = imageData[Object.keys(imageData)[0]];
    });

    let productList = [];
    let productRow = [];
    productData.products.map((product) => {
      if (product.category.toLowerCase() === category.toLowerCase()) {
        if (productRow.length == 2) {
          productRow.push(product);
          productList.push(productRow);
          productRow = [];
        } else {
          productRow.push(product);
        }
      }
      return product;
    });
    if (productRow.length > 0) {
      productList.push(productRow);
    }
    setProductList(productList);
    setImageMap(imgMap);
  }, [category]);

  return (
    <div className="container max-width product-display-container">
      <div className="row justify-content-center max-width product-display-product-row">
        <div className="col-12 product-display-header-container">
          <h1 className="product-display-header">
            {productData.productsDisplayHeader[category]}
          </h1>
        </div>
      </div>
      {productList.map((productRow) => (
        <div className="row justify-content-center max-width product-display-product-row">
          {productRow.map((product) => (
            <div className="col-sm-12 col-md-3">
              <div
                className="card product-display-product-card"
                onClick={() => navigate(`/details/${product.id}`)}
              >
                <img
                  src={imageMap[product.img]}
                  className="card-img-top product-display-product-image"
                  alt="Imagen no Disponible"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <button
                    type="button"
                    className="btn btn-warning product-display-btn"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
