import React from 'react';

import img from './img/card-bg.png';
// eslint-disable-next-line react/prop-types
export default function Card({children}) {
  console.log(children);
  return (
    <div className="card">
      <img src={img} className="position-absolute"/>
      <div className="card-inner">
        {children}
      </div>
    </div>
  );
};
