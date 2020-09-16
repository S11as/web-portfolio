import React, {useEffect} from 'react';

import {useInView} from 'react-intersection-observer';
import anime from 'animejs';

import bg from './img/bg.png';
export default function LetsWork() {
  const setHeight = () => {
    const container = document.getElementById('work-wrapper');
    const img = document.getElementById('work-bg');
    container.style.height = img.height+'px';
  };
  const {ref, inView} = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  useEffect(()=>{
    if (inView) {
      const timeline = anime.timeline();
      timeline.add({
        targets: '.work-headline',
        opacity: [0, 1],
        duration: 1600,
        easing: 'easeInOutSine',
      }) .add({
        targets: '.work-subheading',
        opacity: [0, 1],
        translateY: [-100, 0],
        duration: 1000,
        easing: 'easeInOutSine',
      }, 1000)
          .add({
            targets: '.social-wrapper',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutSine',
          }, 1500);
    }
  });
  return (
    <section ref={ref}>
      <img src={bg} className="bg-image image-fluid" id="work-bg"
        onLoad={setHeight}/>
      <div className="container" id="work-wrapper">
        <div className="row h-85 align-items-center">
          <div className="col-7">
            <div className="row justify-content-start">
              <div className="col-auto work-headline">
                  Let&apos;s Work Together
              </div>
            </div>
            <div className="row">
              <div className="col-auto work-subheading">
                  Have a project to discuss? Contact me here.
              </div>
            </div>
          </div>
          <div className="col-auto social-wrapper">
            <a href="mailto:kirill.9992@gmail.com">
              <i className="far fa-envelope"/>
            </a>
          </div>
          <div className="col-auto social-wrapper">
            <a href="https://www.linkedin.com/in/kirill-lakhov-1876571b6/">
              <i className="fab fa-linkedin"/>
            </a>
          </div>
          <div className="col-auto social-wrapper">
            <a href="https://vk.com/id372084813">
              <i className="fab fa-vk"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
