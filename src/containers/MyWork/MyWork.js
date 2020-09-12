import React from 'react';
import Footer from '../../components/Footer/Footer';
import LetsWork from '../../components/LetsWork/LetsWork';
import {Canvas as StarCanvas} from '../Home/canvas/src/js/StarCanvas/Canvas';
import Card from '../../components/Card/Card';
import PrimaryButton from '../../utils/PrimaryButton/PrimaryButton';
import {Link} from 'react-router-dom';
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
    const cards = [];
    for (const project in projects) {
      if (projects.hasOwnProperty(project)) {
        const data = projects[project];
        cards.push(
            <Card>
              <div className="row justify-content-center mb-4">
                <div className="col-auto description-title">
                  {data.title}
                </div>
              </div>
              <div className="row justify-content-center position-relative
              mb-4">
                <img className="col-auto" src={data.img} alt=""/>
                <div className="mywork-hover container">
                  <div className="row h-100 justify-content-center
                  align-items-center">
                    <div className="col-auto">
                      <Link to={data.link}>
                        <PrimaryButton>View</PrimaryButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-end mb-4">
                <div className="col-auto project-category">
                  {data.category}
                </div>
              </div>
              <div className="row justify-content-end mb-3">
                <div className="col-auto project-description">
                  {data.description.preview}
                </div>
              </div>
            </Card>,
        );
      }
    }
    return (
      <section className="page">
        <div id="canvas-pad"/>
        <div className="container mywork-wrapper">
          <div className="row justify-content-between">
            {cards}
          </div>
        </div>
        <LetsWork/>
        <Footer/>
      </section>
    );
  }
}
