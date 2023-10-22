import React from 'react';

const Modal = ({ content, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full z-50 bg-black bg-opacity-50" onClick={handleOverlayClick}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6" style={{ width: '500px', height: '500px' }}>
        <button className="absolute top-2 right-2 text-gray-600 cursor-pointer" onClick={onClose}>
          Close
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
