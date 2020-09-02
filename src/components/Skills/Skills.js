import React from 'react';
import Card from '../Card/Card';
import RedWrapper from '../../utils/RedWrapper';
import classNames from 'classnames';

import img from './img/skills-bg.png';
import cards from './cards';
class Skills extends React.Component {
  createCardInner(card) {
    const items = [];
    for (const [index, item] of card.items.entries()) {
      items.push(
          <div className={classNames('col-auto', 'skill',
              {'mt-4': index === 0},
          )} key={index}>
            <img src={item.image} alt="" width="40" height="40"/>
            <span>{item.text}</span>
          </div>,
      );
    }
    return (
      <div>
        <RedWrapper active={card.redWrapper} white={true} font={25}>
          {card.title}
        </RedWrapper>
        {items}
      </div>
    );
  }

  render() {
    return (
      <section>
        <img src={img} className="bg-image"/>
        <div className="container skills-wrapper">
          <div className="row justify-content-between mb-5">
            <Card>
              <div className="row justify-content-center">
                {this.createCardInner(cards.frontEnd)}
              </div>
            </Card>
            <Card>
              <div className="row justify-content-center">
                {this.createCardInner(cards.backEnd)}
              </div>
            </Card>
          </div>
          <div className="row justify-content-center">
            <Card>
              <div className="row justify-content-center">
                {this.createCardInner(cards.design)}
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
