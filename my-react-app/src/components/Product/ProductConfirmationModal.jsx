import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductConfirmationModal = ({ show, handleClose, handleConfirm, actionType }) => {
  const actionText = actionType.charAt(0).toUpperCase() + actionType.slice(1);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm {actionText}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to {actionType} this product?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          {actionText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductConfirmationModal;
