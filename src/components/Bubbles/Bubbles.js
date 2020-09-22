import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import bg from './img/bubbles-bg.png';
import {Canvas as BubbleCanvas} from
  '../Canvas/canvas/src/js/BubbleCanvas/Canvas';

import {useInView} from 'react-intersection-observer';
import anime from 'animejs';
import classNames from 'classnames';

// eslint-disable-next-line react/prop-types
export default function Bubbles(props) {
  const setHeight = () =>{
    const container = document.getElementById('description-wrapper');
    const img = document.getElementById('bubbles-bg');
    container.style.height = img.height+'px';
  };
  const {ref, inView, entry} = useInView({
    // eslint-disable-next-line react/prop-types
    threshold: props.longAnimaton ? 0.2 : 0,
    triggerOnce: true,
  });

  useEffect(()=>{
    // aka component did mount
    const bubbleCanvas = new BubbleCanvas('bubbles',
        {width: 420, height: 800});
    setInterval(() => {
      if (bubbleCanvas.displayed) bubbleCanvas.createBubble();
    }, 1000);

    // intersect viewer
    if (inView) {
      const timeline = anime.timeline();
      timeline.add({
        targets: entry.target,
        translateY: [300, 0],
        duration: 600,
        easing: 'easeInOutSine',
      })
          .add({
            targets: '.description-title',
            opacity: [0, 1],
            duration: 1600,
            easing: 'easeInOutSine',
          }, '-=200')
          .add({
            targets: '.description-quote',
            opacity: [0, 1],
            translateY: [-100, 0],
            duration: 1000,
            easing: 'easeInOutSine',
          }, '-=600');
      timeline.play();
    }
  }, [inView]);


  return (
    <section ref={ref} className={classNames({
      'bubbles-anime': props.longAnimation,
    })}>
      <img src={bg} className="bg-image image-fluid" id="bubbles-bg"
        onLoad={setHeight}/>
      <div className="container description-wrapper" id="description-wrapper">
        <div className="row h-85 align-items-center">
          <div className="col-7 description-inner-wrapper">
            <div className="row justify-content-center">
              <div className="col-auto description-title">
                {props.title}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto description-quote">
                {props.addition}
              </div>
            </div>
          </div>
          <div className="col bubbles-wrapper">
            <div id="bubbles"/>
          </div>
        </div>
      </div>
    </section>
  );
}

Bubbles.propTypes = {
  title: PropTypes.string,
  addition: PropTypes.node,
  longAnimation: PropTypes.bool,
};
