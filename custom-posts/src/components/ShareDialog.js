import React from 'react';

const ShareDialog = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <p className="mb-4">Share this post</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareDialog;
