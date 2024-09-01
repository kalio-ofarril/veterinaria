import { useEffect, useState } from "react";

import "./MainImageSlider.css";

const MainImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = require.context("../../assets/imgs-slider", true);
  const imageList = images.keys().map((image) => images(image));

  useEffect(() => {
    const id = setInterval(() => showNextImage(), 5000);

    return () => {
      clearInterval(id);
    };
  }, []);

  function showPreviousImage() {
    setImageIndex((index) => {
      return index === 0 ? imageList.length - 1 : index - 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      return index === imageList.length - 1 ? 0 : index + 1;
    });
  }

  return (
    <div className="main-image-slider-container">
      <div className="main-image-slider-slider">
        {imageList.map((image) => {
          return (
            <img
              key={image}
              src={image}
              className="main-image-slider-img"
              alt="Imagen no Disponible"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          );
        })}
      </div>
      <div
        className="main-image-slider-btn-container arrow-left"
        style={{ left: 0 }}
        onClick={showPreviousImage}
      >
        <i
          className="bi bi-caret-left-square main-image-slider-btn"
          style={{ left: 0 }}
        ></i>
      </div>
      <div
        className=" main-image-slider-btn-container arrow-right"
        style={{ right: 0 }}
        onClick={showNextImage}
      >
        <i
          className="bi bi-caret-right-square main-image-slider-btn"
          style={{ right: 0 }}
        ></i>
      </div>
      <div className="main-image-slider-bottom-btns-container">
        {imageList.map((_, index) => (
          <button
            onClick={() => setImageIndex(index)}
            className="main-image-slider-bottom-btns"
          >
            {index === imageIndex ? (
              <i className="bi bi-wrench-adjustable-circle-fill"></i>
            ) : (
              <i className="bi bi-wrench-adjustable-circle"></i>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainImageSlider;
