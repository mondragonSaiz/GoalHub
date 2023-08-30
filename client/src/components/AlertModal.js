import React, { Children } from 'react';

export default function AlertModal({ isVisible, onClose, children, bgColor }) {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };
  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-start place-self-start mt-2 px-2"
      id="wrapper"
    >
      <div className="w-[600px]  flex flex-col">
        <button
          onClick={() => onClose()}
          className="text-white text-xl place-self-end"
        >
          X
        </button>
        <div className={`bg-red-500 p-2 rounded-md text-white`}>{children}</div>
      </div>
    </div>
  );
}
