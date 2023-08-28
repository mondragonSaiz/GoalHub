import React, { Children } from 'react';

export default function CustomModal({ isVisible, onClose, children }) {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };
  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
    >
      <div className="w-[600px]  flex flex-col">
        <button
          onClick={() => onClose()}
          className="text-white text-xl place-self-end"
        >
          X
        </button>
        <div className="bg-white p-2 rounded-md">{children}</div>
      </div>
    </div>
  );
}
