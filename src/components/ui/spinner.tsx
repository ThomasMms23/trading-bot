import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-6 h-6 border-4 border-t-transparent border-indigo-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
