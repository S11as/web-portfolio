import React, {useEffect} from 'react';

import {useInView} from 'react-intersection-observer';
import anime from 'animejs';

import classNames from 'classnames';
import img from './img/card-bg.png';
// eslint-disable-next-line react/prop-types
export default function Card({children}) {
  const {ref, inView, entry} = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(()=>{
    if (inView && window.innerWidth > 600) {
      // card->card-inner->row->elements
      const children = entry.target.children[1].children[0].children;
      const timeline = anime.timeline();
      timeline.add({
        targets: entry.target,
        translateY: [300, 0],
        duration: 1000,
        easing: 'easeInOutSine',
      }).add({
        targets: children,
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutSine',
        delay: (el, i) =>150 * i,
      });
      timeline.play();
    }
  });
  return (
    <div className="card card-anime" ref={ref}>
      <img src={img} className="position-absolute"/>
      <div className={classNames('card-inner', {
        'd-none': !inView,
      })}>
        {children}
      </div>
    </div>
  );
};
