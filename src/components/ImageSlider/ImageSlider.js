import React from 'react';
import PropTypes from 'prop-types';

import {Carousel} from 'react-responsive-carousel';
import bg from './img/bg.png';
export default class ImageSlider extends React.Component {
  setHeight() {
    const container = document.getElementById('slider-wrapper');
    const img = document.getElementById('slider-bg');
    container.style.height = img.height+'px';
  }
  render() {
    const images = [];
    for (const image of this.props.images) {
      images.push(
          <div>
            <img src={image}/>
          </div>,
      );
    }
    return (
      <section>
        <img src={bg} className="bg-image" id="slider-bg"
          onLoad={this.setHeight.bind(this)}/>
        <div className="container-fluid" id="slider-wrapper">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-10">
              <Carousel>
                {images}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
ImageSlider.propTypes = {
  images: PropTypes.array,
};

