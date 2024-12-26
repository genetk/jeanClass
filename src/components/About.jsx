import React from "react";
const AboutUs = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Heading */}
        <p className="text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">About Me</span>
        </p>
      
        <div className="row">
          <div className="col-lg-8 text-center text-lg-start wow fadeInUp">
            <h2 className="text-8 fw-400 mb-3">
              Hi, I'm{" "}
              <span className="fw-700 border-bottom border-3 border-primary">
               Genet kahsay
              </span>
            </h2>
            <p className="text-5">
            I'm a Graduate Front-End Software Engineer with a solid foundation in HTML, CSS, and JavaScript.
            Proficient in React and Angular, I specialize in building responsive, user-friendly web applications.
            My academic background in Computer Science has equipped me with a deep understanding of software development principles. 
            I have hands-on experience with Agile methodologies, version control using Git, and RESTful API integration.
            Passionate about delivering high-quality code,I thrive in collaborative environments.
            I'm eager to contribute to impactful projects and grow within a dynamic team.
            </p>
          </div>
          <div
            className="col-lg-4 mt-4 mt-lg-0 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="featured-box style-4">
              <div className="featured-box-icon text-25 fw-500 bg-primary rounded-circle">
                <span className="wow heartBeat" data-wow-delay="1.3s" style={{ fontSize: '40px' }}>
                 1.5 
                </span>
              </div>
              <h3 className="text-7 wow rubberBand" data-wow-delay="2s">
                Years of <span className="fw-700">School Project Experience</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row gy-3 mt-4">
          <div className="col-6 col-lg-3 wow fadeInUp">
            <p className="text-muted fw-500 mb-0">Name:</p>
            <p className="text-4 text-dark fw-600 mb-0">Genet Kahsay</p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
            <p className="text-muted fw-500 mb-0">Email:</p>
            <p className="text-4 fw-600 mb-0">
              <a className="link-dark" href="genet.kahsay@miu.edu">
              genet.kahsay@miu.edu
              </a>
            </p>
          </div>
          
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
            <p className="text-muted fw-500 mb-0">From:</p>
            <p className="text-4 text-dark fw-600 mb-0">Oakland, USA.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
