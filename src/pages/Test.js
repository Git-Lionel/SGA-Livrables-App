import React, { useState } from "react";
import Modal from "../components/Modal";

// **************** Boite modal à la main tel que tuto YT WDS **************************//

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="test-page">
      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Upload
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Test;
