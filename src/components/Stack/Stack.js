import React from 'react';
import img from '../Skills/img/skills-bg.png';
import PropTypes from 'prop-types';
import RedWrapper from '../../utils/RedWrapper/RedWrapper';
import Card from '../Card/Card';
import classNames from 'classnames';

class Stack extends React.Component {
  createCardInner(card) {
    if (card && card.items) {
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
  }
  render() {
    return (
      <section>
        <img src={img} className="bg-image"/>
        <div className="container skills-wrapper">
          <div className="row justify-content-center skill-headline">
            <div className="col-auto">
              Project essentials
            </div>
          </div>
          <div className="row justify-content-between mb-6">
            <Card>
              <div className="row justify-content-center">
                {this.createCardInner(this.props.stack.frontEnd)}
              </div>
            </Card>
            <Card>
              <div className="row justify-content-center">
                {this.createCardInner(this.props.stack.backEnd)}
              </div>
            </Card>
          </div>
          <div className="row justify-content-center">
            <Card>
              <div className="row justify-content-center">
                {this.createCardInner(this.props.stack.design)}
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }
}

Stack.propTypes = {
  stack: PropTypes.object.isRequired,
};

export default Stack;
