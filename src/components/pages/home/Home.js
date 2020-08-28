import React from 'react';
import Canvas from './canvas/src/js/classes/Canvas';


import img from './canvas/src/img/bg.png';

class Home extends React.Component {
  componentDidMount() {
    const canvas = new Canvas('canvas-pad', 'Hello world');
    setInterval(() => {
      if (canvas.displayed) canvas.createStar();
    }, 1000);
  }

  render() {
    console.log(img);
    return (
      <section className="page">
        <div className="canvas-pad"/>
      </section>
    );
  }
}

export default Home;
