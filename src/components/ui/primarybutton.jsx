import React from 'react';

const PrimaryButton = ({ children, onClick, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;