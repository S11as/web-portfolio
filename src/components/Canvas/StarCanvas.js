import React, {useEffect} from 'react';

import {Canvas as StarCanvasModel} from './canvas/src/js/StarCanvas/Canvas';
import img from './canvas/src/img/bg.png';

import anime from 'animejs';
import PropTypes from 'prop-types';

// import {withResizeDetector} from 'react-resize-detector';

function StarCanvas(props) {
  const width = window.innerWidth;
  useEffect(() => {
    if (width > 600) {
      let textWrapper = document.querySelector('.star-text .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(
          /[^ ]/g,
          '<span class=\'letter\'>$&</span>',
      );
      textWrapper = document.querySelector('.star-quote .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(
          /[^ ]/g,
          '<span class=\'letter\'>$&</span>',
      );
      anime.timeline()
          .add({
            targets: '.star-text .line',
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: 'easeOutExpo',
            duration: 1000,
          }).add({
            targets: '.star-text .line',
            translateX: [0, document.querySelector('.star-text .letters')
                .getBoundingClientRect().width + 10],
            easing: 'easeOutExpo',
            duration: 1800,
            delay: 100,
          }).add({
            targets: '.star-text .letter',
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: (el, i) => 34 * (i + 1),
          }, '-=1700').add({
            targets: '.star-text .line',
            opacity: 0,
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 500,
          }, '-=500').add({
            targets: '.star-quote .letter',
            scale: [0, 1],
            duration: 1200,
            elasticity: 600,
            delay: (el, i) => 45 * (i + 1),
          }, '-=1000').play();
    }

    const starCanvas = new StarCanvasModel('star-canvas', img);
    setInterval(() => {
      if (starCanvas.displayed) starCanvas.createStar();
    }, 1000);
  });
  return (
    <div className="canvas-wrapper">
      <div id='star-canvas'/>
      <div className="canvas-text-wrapper">
        <h1 className='star-text'>
          {width > 600 &&
            <span className='line'/>
          }
          <span className='letters'>{props.text}</span>
        </h1>
        <h2 className='star-quote'>
          <span className='letters'>{props.quote}</span>
        </h2>
      </div>
    </div>
  );
}

StarCanvas.propTypes = {
  text: PropTypes.string,
  quote: PropTypes.string,
  width: PropTypes.number,
};

export default StarCanvas;
