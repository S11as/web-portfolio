import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Card({children}) {
  return (
    <div className="col-auto card">
      {children}
    </div>
  );
};
