
import React from "react";
import { Modal, Button } from "react-bootstrap";

const ProjectDetailsModal = ({ projectDetails, setIsOpen }) => {
  if (!projectDetails) return null;

  return (
    <Modal show onHide={() => setIsOpen(false)} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{projectDetails.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {projectDetails.type === "video" ? (
          <video width="100%" controls>
            <source src={projectDetails.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>{projectDetails.description}</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectDetailsModal;

