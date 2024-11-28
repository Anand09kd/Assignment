import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
    </div>
  );
};

export default Loader;
