import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import PrimaryButton from '../../utils/PrimaryButton/PrimaryButton';

import {useInView} from 'react-intersection-observer';
import anime from 'animejs';

import classNames from 'classnames';
import {withResizeDetector} from 'react-resize-detector';
import PropTypes from 'prop-types';

import bg from './img/bg.png';
function Projects(props) {
  const setHeight = ()=> {
    const container = document.getElementById('projects-wrapper');
    const img = document.getElementById('projects-bg');
    if (container) container.style.height = img.height+'px';
  };
  const {ref, inView, entry} = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });
  useEffect(()=>{
    if (inView) {
      const timeline = anime.timeline();
      timeline.add({
        targets: entry.target,
        translateY: [500, 0],
        duration: 1000,
        easing: 'easeInOutSine',
      })
          .add({
            targets: '.description-title',
            opacity: [0, 1],
            duration: 1600,
            easing: 'easeInOutSine',
          }, '-=200')
          .add({
            targets: '.work-anime',
            opacity: [0, 1],
            duration: 1600,
            easing: 'easeInOutSine',
          }, '-=1800')
          .add({
            targets: '.description-quote',
            opacity: [0, 1],
            translateY: [-100, 0],
            duration: 1000,
            easing: 'easeInOutSine',
          }, '-=600')
          .add({
            targets: '.link-anime',
            opacity: [0, 1],
            translateY: [-100, 0],
            duration: 1000,
            easing: 'easeInOutSine',
          }, '-=900');
    }
  });
  return (
    <section ref={ref} className='projects-anime'>
      <img src={bg} className="bg-image image-fluid" id="projects-bg"
        onLoad={setHeight}/>
      <div className="container" id="projects-wrapper">
        <div className={classNames('row', {
          'h-85': props.width > 1200,
          'align-items-center': props.width > 1200,
          'p-200': props.width < 1200,
        })}>
          <div className="col-xl-7 col-12">
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
          <div className={classNames('col',
              {
                'top-offset': props.width > 1200,
              })}>
            <div className="row justify-content-center">
              <h6 className={classNames('col-auto', 'work-anime', 'mb-5', {
                'mt-100': props.width < 1200,
              })}>
                  All my work  in one place
              </h6>
            </div>
            <div className="row justify-content-center">
              <Link to="/" className="col-auto link-anime">
                <PrimaryButton>Let&apos;s see</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  width: PropTypes.number,
};

export default withResizeDetector(Projects);
