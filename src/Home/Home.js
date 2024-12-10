import {Carousel} from "react-bootstrap";
import "./Home.css";

export const Home = () => {
  return (
    <Carousel className="class">
      <Carousel.Item interval={1000}>
        <img
          className="carousal-img"
          src="https://assets.startbootstrap.com/img/meta/products/twitter/twitter-image-stylish-portfolio.png"
          alt="First slide"
        />
        <button className="btn draw-border">button</button>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="carousal-img"
          src="https://assets.startbootstrap.com/img/meta/products/twitter/twitter-image-stylish-portfolio.png"
          alt="First slide"
        />
         <button className="btn draw-border">button</button>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousal-img"
          src="https://assets.startbootstrap.com/img/meta/products/twitter/twitter-image-stylish-portfolio.png"
          alt="First slide"
        />
         <button className="btn draw-border">button</button>
      </Carousel.Item>
    </Carousel>
  );
};
