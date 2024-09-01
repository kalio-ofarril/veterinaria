import "./MiniSlider.css";

import Carousel from "react-bootstrap/Carousel";

const MiniSlider = () => {
  const images = require.context("../../assets/imgs-mini-slider", true);
  const imageList = images.keys().map((image) => images(image));

  const img1 = imageList[0];
  const img2 = imageList[1];
  const img3 = imageList[2];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Carousel>
            <Carousel.Item>
              <img src={img1} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img2} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img3} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MiniSlider;
