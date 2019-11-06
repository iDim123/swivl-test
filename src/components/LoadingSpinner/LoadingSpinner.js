import './LoadingSpinner.css';

import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="spinner__container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
