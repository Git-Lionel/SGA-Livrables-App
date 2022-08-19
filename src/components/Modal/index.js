import React from "react";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div className="overlay" />
      <div className="modal">
        Fancy Modal
        <button type="button" onClick={onClose}>
          Apply
        </button>
      </div>
    </>
  );
};

export default Modal;
