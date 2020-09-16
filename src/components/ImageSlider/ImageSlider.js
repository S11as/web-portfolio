import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Carousel} from 'react-responsive-carousel';

import {useInView} from 'react-intersection-observer';
import anime from 'animejs';

import bg from './img/bg.png';
export default function ImageSlider(props) {
  const setHeight = () => {
    const container = document.getElementById('slider-wrapper');
    const img = document.getElementById('slider-bg');
    container.style.height = img.height+'px';
  };
  const images = [];
  for (const image of props.images) {
    images.push(
        <div key={images.length}>
          <img src={image}/>
        </div>,
    );
  }
  const {ref, inView, entry} = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  useEffect(()=>{
    if (inView) {
      const timeline = anime.timeline();
      timeline.add({
        targets: entry.target,
        translateY: [300, 0],
        duration: 1000,
        easing: 'easeInOutSine',
      })
          .add({
            targets: '#slider-wrapper',
            opacity: [0, 1],
            duration: 1600,
            easing: 'easeInOutSine',
          }, '-=200');
    }
  });
  return (
    <section ref={ref} className='slider-anime'>
      <img src={bg} className="bg-image" id="slider-bg"
        onLoad={setHeight}/>
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
ImageSlider.propTypes = {
  images: PropTypes.array,
};

