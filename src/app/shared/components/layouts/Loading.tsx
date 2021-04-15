import React from 'react';

export const Loading = ({isShow}) => {
  return(
    <div className={isShow ? 'loader-wrapper d-flex justify-content-center align-items-center' : 'hidden'}>
      <div className="loader"></div>
    </div>
  );
};
