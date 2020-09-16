import React, {useEffect} from 'react';
import Card from '../Card/Card';
import RedWrapper from '../../utils/RedWrapper/RedWrapper';
import classNames from 'classnames';

import img from './img/skills-bg.png';
import cards from './cards';

import {useInView} from 'react-intersection-observer';
import anime from 'animejs';

function Skills() {
  const createCardInner = (card) => {
    const items = [];
    for (const [index, item] of card.items.entries()) {
      items.push(
          <div className='row justify-content-center'>
            <div className={classNames(
                'col-auto',
                'skill',
                {'mt-4': index === 0},
            )} key={index}>
              <img src={item.image} alt="" width="40" height="40"/>
              <span>{item.text}</span>
            </div>
          </div>,
      );
    }
    return (
      <div className='container'>
        <div className="row justify-content-center">
          <RedWrapper active={card.redWrapper}
            white={true} font={25}>
            {card.title}
          </RedWrapper>
        </div>
        {items}
      </div>
    );
  };
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
        duration: 600,
        easing: 'easeInOutSine',
      })
          .add({
            targets: '.skill-headline',
            opacity: [0, 1],
            duration: 1600,
            easing: 'easeInOutSine',
          }, '-=200');
    }
  });
  return (
    <section ref={ref}>
      <img src={img} className="bg-image"/>
      <div className="container skills-wrapper">
        <div className="row justify-content-center skill-headline">
          <div className="col-auto">
              My skills
          </div>
        </div>
        <div className="row justify-content-between mb-6">
          <Card>
            {createCardInner(cards.frontEnd)}
          </Card>
          <Card>
            {createCardInner(cards.backEnd)}
          </Card>
        </div>
        <div className="row justify-content-center">
          <Card>
            {createCardInner(cards.design)}
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Skills;
