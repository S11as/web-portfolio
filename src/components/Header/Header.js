import React from 'react';
import {withRouter} from 'react-router-dom';

import RedWrapper from '../../utils/RedWrapper/RedWrapper';
import HeaderLink from '../../utils/HeaderLink/HeaderLink';
import {Link} from 'react-router-dom';


import classNames from 'classnames';
import PropTypes from 'prop-types';

import navigation from '../../lib/Navigation/navigation';

import anime from 'animejs';

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
      <header className={classNames( 'nav-wrapper', {
        'nav-wrapper-black': this.state.isBlack,
      },
      )}>
        <div className="container">
          <div className="row justify-content-around">
            <RedWrapper font={22} active={true}>
              <Link to='/'>Silas</Link>
            </RedWrapper>
            <div className="col-auto">
              <nav className="row">
                {this.state.nav}
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.any,
};

export default withRouter(Header);
