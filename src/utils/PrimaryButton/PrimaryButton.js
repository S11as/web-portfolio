import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = (props) => {
  return (
    <button className="primary-button">
      {props.children}
    </button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node,
};

export default PrimaryButton;
