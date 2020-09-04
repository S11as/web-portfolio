import React from 'react';
import {Link} from 'react-router-dom';
import PrimaryButton from '../../utils/PrimaryButton/PrimaryButton';

import bg from './img/bg.png';
export default class Projects extends React.Component {
  setHeight() {
    const container = document.getElementById('projects-wrapper');
    const img = document.getElementById('projects-bg');
    container.style.height = img.height+'px';
  }
  render() {
    return (
      <section>
        <img src={bg} className="bg-image image-fluid" id="projects-bg"
          onLoad={this.setHeight.bind(this)}/>
        <div className="container" id="projects-wrapper">
          <div className="row h-85 align-items-center">
            <div className="col-7">
              <div className="row justify-content-center">
                <div className="col-auto description-title">
                  Projects
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto description-quote">
                  &quot;Begin, be bold and venture to be wise&quot;
                </div>
              </div>
            </div>
            <div className="col top-offset">
              <div className="row justify-content-center">
                <h6 className="col-auto">
                  All my work  in one place
                </h6>
              </div>
              <div className="row justify-content-center">
                <Link to="/" className="col-auto">
                  <PrimaryButton>Let&apos;s see</PrimaryButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
