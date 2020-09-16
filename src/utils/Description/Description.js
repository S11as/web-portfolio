import React, {useEffect} from 'react';
import bg from './img/bg.png';
import PropTypes from 'prop-types';

import {useInView} from 'react-intersection-observer';
import anime from 'animejs';

function Description(props) {
  function setHeight() {
    const bg = document.getElementById('description-bg');
    const wrapper = document.getElementById('project-description-wrapper');
    wrapper.style.height = bg.height + 'px';
  }
  const {ref, inView, entry} = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  useEffect(()=>{
    if (inView) {
      const timeline = anime.timeline();
      timeline.add({
        targets: entry.target,
        translateY: [300, 0],
        duration: 800,
        easing: 'easeInOutSine',
      })
          .add({
            targets: '.project-description-title',
            opacity: [0, 1],
            duration: 1600,
            easing: 'easeInOutSine',
          }, '-=200')
          .add({
            targets: '.project-description-inner',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutSine',
          }, '-=600');
    }
  });

  return (
    <section ref={ref} className="description-anime">
      <img src={bg} className="bg-image" id="description-bg"
        onLoad={setHeight.bind(this)}/>
      <div className="container" id="project-description-wrapper">
        <div className="row h-85 justify-content-center align-items-center">
          <div className="col-10">
            <div className="row mb-4 justify-content-center">
              <div className="col-auto project-description-title">
                {props.title}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto project-description-inner">
                {props.info}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Description.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};
export default Description;
