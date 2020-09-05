import React from 'react';
import anime from 'animejs';
import {withRouter} from 'react-router-dom';

import RedWrapper from '../../utils/RedWrapper/RedWrapper';
import HeaderLink from '../../utils/HeaderLink/HeaderLink';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import navigation from '../../lib/Navigation/navigation';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlack: false,
      nav: [],
    };
  }

  componentDidMount() {
    this.headerSetUp();
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 0) {
        this.setState({
          isBlack: true,
        });
        anime({
          targets: '.nav-wrapper',
          paddingTop: 15,
          paddingBottom: 15,
          duration: 100,
          easing: 'linear',
        });
      } else {
        this.setState({
          isBlack: false,
        });
        anime({
          targets: '.nav-wrapper',
          paddingTop: 25,
          paddingBottom: 25,
          duration: 300,
          easing: 'linear',
        });
      }
    });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location !== prevProps.location) {
      this.headerSetUp();
    }
  }

  headerSetUp() {
    const nav = [];
    for (const [index, link] of navigation.entries()) {
      const active = link.to === this.props.location.pathname;
      console.log(this.props.location.pathname);
      nav.push(
          <HeaderLink to={link.to} key={index} active={active}>
            {link.text}
          </HeaderLink>,
      );
    }
    this.setState({
      nav: nav,
    });
  }

  render() {
    return (
      <div className={classNames({
        'container-fluid': true,
        'nav-wrapper': true,
        'nav-wrapper-black': this.state.isBlack,
      },
      )}>
        <div className="container">
          <div className="row justify-content-around">
            <RedWrapper font={22} active={true}><span>Silas</span></RedWrapper>
            <div className="col-auto">
              <nav className="row">
                {this.state.nav}
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  location: PropTypes.any,
};

export default withRouter(Header);
