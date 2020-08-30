import React from 'react';

import bg from './img/bubbles-bg.png';
export default class Bubbles extends React.Component {
  componentDidUpdate() {
    this.setHeight();
  }
  componentDidMount() {
    this.setHeight();
  }
  setHeight() {
    setTimeout(() => {
      const container = document.getElementById('description-wrapper');
      const img = document.getElementById('bubbles-bg');
      console.log(container);
      console.log(container.height);
      console.log(img.height);
      container.style.height = img.height+'px';
    }, 100);
  }
  render() {
    return (
      <section>
        <img src={bg} className="bg-image image-fluid" id="bubbles-bg" onLoad={this.setHeight.bind(this)}/>
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
          </div>
        </div>
      </section>
    );
  }
}