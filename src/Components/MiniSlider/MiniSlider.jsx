import { useEffect, useState } from "react";

import "./MiniSlider.css";

const MiniSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = require.context("../../assets/imgs-mini-slider", true);
  const imageList = images.keys().map((image) => images(image));

  useEffect(() => {
    const id = setInterval(() => showNextImage(), 3000);
    return () => {
      clearInterval(id);
    };
  }, []);

  function showNextImage() {
    setImageIndex((index) => {
      return index === imageList.length / 2 ? 0 : index + 1;
    });
  }

  return (
    <div className="container max-width">
      <div className="row justify-content-center max-width mini-slider-container">
        <div className="col-1"></div>
        <div className="col-10 mini-image-slider-container">
          {imageList.map((image) => (
            <img
              key={image}
              src={image}
              className="mini-image-slider-img"
              alt="Imagen no Disponible"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
          ;
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default MiniSlider;
