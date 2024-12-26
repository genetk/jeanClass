import React from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { scrollDuration } from "../../../config/commonConfig";

const FullScreenDefaultIntro = () => {
  return (
    <section
      id="home"
      className="bg-classic-blue d-flex flex-column fullscreen py-5 position-relative"
    >
      <div className="container my-auto py-4">
        <div className="row">
          <div className="col-lg-7 text-center text-lg-start align-self-center order-1 order-lg-0 wow fadeIn">
            <h1 className="text-12 fw-300 mb-0 text-uppercase">
              Hi, I'm a Software
            </h1>
            <h2 className="text-21 fw-600 text-uppercase mb-0 ms-n1">
              <Typewriter
                options={{
                  strings: "Developer",
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="text-5">based in Oakland, USA.</p>
            <Link
              className="btn btn-dark rounded-0 smooth-scroll mt-3"
              smooth="easeInOutQuint"
              duration={scrollDuration}
              style={{ cursor: "pointer" }}
              to="portfolio"
            >
              View My Works
            </Link>
           
          </div>
          <div className="col-lg-5 text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1">
            <div className="bg-light rounded-pill d-inline-block p-3 shadow-lg wow zoomIn">
              <img
                className="img-fluid rounded-pill d-block"
                src="images/web-developer.jpg"
                title="I'm Genet"
                alt="I'm Genet"
              />
            </div>
          </div>
        </div>
      </div>
      <Link
        className="scroll-down-arrow text-dark smooth-scroll"
        smooth="easeInOutQuint"
        duration={scrollDuration}
        style={{ cursor: "pointer" }}
        to="about"
      >
        <span className="animated">
          <i className="fas fa-arrow-down" />
        </span>
      </Link>
    </section>
  );
};

export default FullScreenDefaultIntro;
