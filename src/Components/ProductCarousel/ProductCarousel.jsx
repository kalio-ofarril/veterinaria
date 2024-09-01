import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./ProductCarousel.css";

import productData from "../../assets/productData.json";

const ProductCarousel = ({ productId }) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [productImages, setProductImages] = useState([]);

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

    let currProduct = {};

    productData.products.map((product) => {
      if (product.id === parseInt(productId)) {
        currProduct = product;
        setCurrentProduct(product);
      }
      return product;
    });

    let productImgs = [];

    currProduct["imgs-description"].map((img) => {
      productImgs.push(imgMap[img]);
    });

    setProductImages(productImgs);
  }, [productId]);

  return (
    <div className="container max-width">
      <div className="row max-width full-height justify-content-center product-carousel-row">
        <div className="col-sm-12 col-md-4 product-carousel-col">
          <Carousel>
            {productImages.map((image) => (
              <Carousel.Item>
                <img
                  src={image}
                  className="carousel-img"
                  alt="Imagen no Disponible"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-sm-12 col-md-4 product-carousel-col">
          <h1>{currentProduct.name}</h1>
          <p>{currentProduct.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
