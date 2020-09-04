import React from 'react';
import PropTypes from 'prop-types';

import bg from './img/bubbles-bg.png';
export default class Bubbles extends React.Component {
  setHeight() {
    const container = document.getElementById('description-wrapper');
    const img = document.getElementById('bubbles-bg');
    container.style.height = img.height+'px';
  }
  render() {
    return (
      <section>
        <img src={bg} className="bg-image image-fluid" id="bubbles-bg"
          onLoad={this.setHeight.bind(this)}/>
        <div className="container description-wrapper" id="description-wrapper">
          <div className="row h-85 align-items-center">
            <div className="col-7 description-inner-wrapper">
              <div className="row justify-content-center">
                <div className="col-auto description-title">
                  I design and code beautiful
                  websites, with love and passion
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto description-quote">
                  &quot;Web is everywhere that&apos;s why we
                  must make most of it&quot;
                </div>
              </div>
            </div>
            <div className="col">
              {this.props.children}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Bubbles.propTypes = {
  children: PropTypes.node,
};
