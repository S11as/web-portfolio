import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class RedWrapper extends React.Component {
  render() {
    return (
      <div className={classNames({
        'col-auto': true,
        'red-wrapper-default': true,
        'red-wrapper': this.props.active || this.props.white,
      })} style={{fontSize: this.props.font}}>
        <div className="row">
          <div className="col red-wrapper-text">
            {this.props.children}
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
  active: PropTypes.bool,
  font: PropTypes.number,
  white: PropTypes.bool,
  children: PropTypes.node,
};

export default RedWrapper;
