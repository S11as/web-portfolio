import React from 'react';
import PropTypes from 'prop-types';

import bg from './img/bubbles-bg.png';
import {Canvas as BubbleCanvas} from
  '../../containers/Home/canvas/src/js/BubbleCanvas/Canvas';
export default class Bubbles extends React.Component {
  setHeight() {
    const container = document.getElementById('description-wrapper');
    const img = document.getElementById('bubbles-bg');
    container.style.height = img.height+'px';
  }
  componentDidMount() {
    const bubbleCanvas = new BubbleCanvas('bubbles', {width: 420, height: 800});
    setInterval(() => {
      if (bubbleCanvas.displayed) bubbleCanvas.createBubble();
    }, 1000);
  }

  render() {
    return (
      <section>
        <img src={bg} className="bg-image image-fluid" id="bubbles-bg"
          onLoad={this.setHeight.bind(this)}/>
        <div className="container description-wrapper" id="description-wrapper">
          <div className="row h-85 align-items-center">
            <div className="col-7 description-inner-wrapper">
              <div className="row justify-content-center">
                <div className="col-auto description-title">
                  {this.props.title}
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto description-quote">
                  {this.props.addition}
                </div>
              </div>
            </div>
            <div className="col">
              <div id="bubbles"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Bubbles.propTypes = {
  title: PropTypes.string,
  addition: PropTypes.node,
};
