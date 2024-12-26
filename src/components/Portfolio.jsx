import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import library from "../../src/videos/library Management.mp4";
import medication from "../../src/videos/medication review.mp4";
import ecommerce from "../../src/videos/e-commerce demo.mp4"


const Portfolio = () => {
  const [selectedProjectDetails, setSelectedProjectDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const projectsData = [
    {
      title: "Library Management",
      type: "video",
      document: {
        projectInfo:
          "libraray management  by users add ,edit and delete books" ,
         
        technologies: "Reactnative, Bootstrap,Json, Jwt",
       
        date: "June, 2024"
      },
      thumbImage:"images/projects/library.jpg",
      videoSrc: library,
    },
    {
      title: "Medication Review",
      type: "video",
      document: {
        projectInfo:
          "MEDICATION REVIEW by users only how ever clients can see reviews" ,
         
        technologies: "Angular, Angular Material,node.js, Express",
       
        date: "June, 2024"
      },
      thumbImage:"images/projects/medication.jpg", 
      videoSrc: medication,
    },
    {
      title: "E-commerce",
      type: "video",
      document: {
        projectInfo:
          "A modern e-commerce platform with user authentication, a shopping cart, and secure payments using Stripe." ,
         
        technologies: "React, Node.js, MongoDB, Stripe API",
       
        date: "Dec, 2024"
      },
      thumbImage:"images/projects/e-commerce.jpg", 
      videoSrc:ecommerce,
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProjectDetails(project);
    setIsOpen(true);
  };

  return (
    <>
      <section id="portfolio" className="section bg-light">
        <div className="container">
          <h2 className="text-10 fw-600 text-center mb-5">
            Some of my most recent projects
          </h2>
          <div className="row g-4">
            {projectsData.map((project, index) => (
              <div
                className="col-sm-6 col-lg-4"
                key={index}
                onClick={() => handleProjectClick(project)}
              >
                <div className="portfolio-box">
                  <div className="portfolio-img">
                    <img
                      className="img-fluid"
                      src={project.thumbImage}
                      alt={project.title}
                    />
                    <div className="portfolio-overlay">
                      <h5 className="text-Black" >{project.title}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isOpen && (
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

export default Portfolio;





