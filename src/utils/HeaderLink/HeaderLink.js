import React from 'react';
import RedWrapper from '../RedWrapper/RedWrapper';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default class HeaderLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={this.props.to} onClick={this.props.test} className="h-link">
        <RedWrapper active={this.props.active}>
          {this.props.children}
        </RedWrapper>
      </Link>
    );
  }
}

HeaderLink.propTypes = {
  active: PropTypes.bool,
  font: PropTypes.number,
  children: PropTypes.node,
  to: PropTypes.string,
  test: PropTypes.func,
};
