import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import PrimaryButton from '../../utils/PrimaryButton/PrimaryButton';

import {useInView} from 'react-intersection-observer';
import anime from 'animejs';

import bg from './img/bg.png';
export default function Projects() {
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
              <h6 className="col-auto work-anime">
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
