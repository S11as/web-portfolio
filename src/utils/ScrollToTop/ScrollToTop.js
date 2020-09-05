import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.any,
  children: PropTypes.node,
};

export default withRouter(ScrollToTop);
