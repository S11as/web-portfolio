import React from 'react';
import {Link} from 'react-router-dom';
import anime from 'animejs';
import RedWrapper from '../../utils/RedWrapper';
import classNames from 'classnames';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlack: false,
    };
  }

  componentDidMount() {
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
            <RedWrapper text="Silas" font={true} active={true}/>
            <div className="col-auto">
              <nav className="row">
                <Link to="/" className="col-auto">
                  <RedWrapper text="Hihi" active={true} font={false}/>
                </Link>
                <Link to="/" className="col-auto">Hihi</Link>
                <Link to="/" className="col-auto">Hihi</Link>
                <Link to="/" className="col-auto">Hihi</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
