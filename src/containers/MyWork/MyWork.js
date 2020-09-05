import React from 'react';
import Footer from '../../components/Footer/Footer';
import {Canvas as StarCanvas} from '../Home/canvas/src/js/StarCanvas/Canvas';
import Card from '../../components/Card/Card';
import projects from '../../lib/Projects/projects';
import img from '../Home/canvas/src/img/bg.png';

export default class MyWork extends React.Component {
  componentDidMount() {
    const starCanvas = new StarCanvas('canvas-pad', 'All projects in one ' +
      'place', img);
    setInterval(() => {
      if (starCanvas.displayed) starCanvas.createStar();
    }, 1000);
  }
  render() {
    return (
      <section className="page">
        <div id="canvas-pad"/>
        <div className="container mywork-wrapper">
          <div className="row">
            <Card>
              <div className="row justify-content-center">
                <div className="col-auto description-title">
                  hello
                </div>
              </div>
              <div className="row justify-content-center">
                <img className="col-auto" src={projects.pexBots.img} alt=""/>
              </div>
            </Card>
          </div>
        </div>
        <Footer/>
      </section>
    );
  }
}
