import React from 'react';
import {Canvas as StarCanvas} from './canvas/src/js/StarCanvas/Canvas';

import Bubbles from '../../components/Bubbles/Bubbles';

import img from './canvas/src/img/bg.png';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import LetsWork from '../../components/LetsWork/LetsWork';
import Footer from '../../components/Footer/Footer';

class Home extends React.Component {
  componentDidMount() {
    const starCanvas = new StarCanvas('canvas-pad', 'Hi, I\'m Kirill,\n' +
      'Front-end and Back-end Developer', img);
    setInterval(() => {
      if (starCanvas.displayed) starCanvas.createStar();
    }, 1000);
  }

  render() {
    return (
      <section className="page">
        <div id="canvas-pad"/>
        <Bubbles
          title="I design and code beautiful
                  websites, with love and passion"
          addition={
            (
              <span>
                &quot;Web is everywhere that&apos;s why we
                must make most of it&quot;
              </span>
            )
          }
        />
        <Skills/>
        <Projects/>
        <LetsWork/>
        <Footer/>
      </section>
    );
  }
}

export default Home;
