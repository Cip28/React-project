import React, { Component } from "react";
import { Link } from "react-router-dom";
import hero from "./images/hero-img.png";

export class Home extends Component {
  render() {
    return (
      <section id="hero" className="d-flex align-items-center">
        <div className="containerz">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center ml-5 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Learn the secrets of the Web Development</h1>
              <p>
                We are team of talented designers ready to make your learning
                easier
              </p>
              <div className="d-lg-flex">
                <Link to="/Registration" className="btn-grad">
                  Get Started
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src={hero}
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
