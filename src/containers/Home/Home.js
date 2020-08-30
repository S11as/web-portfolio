import React from 'react';
import Canvas from './canvas/src/js/classes/Canvas';
import Bubbles from '../../components/Bubbles/Bubbles';

import img from './canvas/src/img/bg.png';
import Skills from '../../components/Skills/Skills';

class Home extends React.Component {
  componentDidMount() {
    const canvas = new Canvas('canvas-pad', 'Hi, I\'m Kirill,\n' +
      'Front-end and Back-end Developer', img);
    setInterval(() => {
      if (canvas.displayed) canvas.createStar();
    }, 1000);
  }

  render() {
    return (
      <section className="page">
        <div id="canvas-pad"/>
        <Bubbles/>
        <Skills/>
      </section>
    );
  }
}

export default Home;
