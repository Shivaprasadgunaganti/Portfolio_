import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Slide1 from "../files/rear-view-programmer-working-all-night-long.jpg";
import Slide2 from "../files/web-design-concept-with-drawings.jpg";
import Slide3 from "../files/programming-background-collage.jpg";

export const Home = () => {
  return (
    <div  style={{position:"relative", top:"70px"}}
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner ">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={Slide1}
            alt="First slide"
            style={{ height: "600px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={Slide2}
            alt="First slide"
            style={{ height: "600px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={Slide3}
            alt="First slide"
            style={{ height: "600px", objectFit: "cover" }}
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
