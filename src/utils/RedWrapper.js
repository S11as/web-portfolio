import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class RedWrapper extends React.Component {
  render() {
    return (
      <div className={classNames({
        'col-auto': true,
        'red-wrapper-default': true,
        'red-wrapper': this.props.active,
        'big-font': this.props.font,
      })}>
        <div className="row">
          <div className="col red-wrapper-text">
            {this.props.text}
          </div>
        </div>
        {this.props.active &&
          <div className="row justify-content-center">
            <div className="red-wrapper-main">
            </div>
          </div>
        }
      </div>
    );
  }
}

RedWrapper.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool,
  font: PropTypes.bool,
};

export default RedWrapper;
