import React from 'react';

const ErrorDisplay = ({ error }) => {
  if (!error) return null;

  return (
    <div className="text-white text-center bg-red-500/20 backdrop-blur-md rounded-xl p-6 mb-8">
      {error}
    </div>
  );
};

export default ErrorDisplay; 