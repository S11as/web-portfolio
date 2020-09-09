import React from 'react';
import LetsWork from '../../components/LetsWork/LetsWork';
import Footer from '../../components/Footer/Footer';
import {Canvas as StarCanvas} from '../Home/canvas/src/js/StarCanvas/Canvas';
import img from '../Home/canvas/src/img/bg.png';
import PropTypes from 'prop-types';

export default class Project extends React.Component {
  componentDidMount() {
    const starCanvas = new StarCanvas('canvas-pad',
        this.props.project.title, img);
    setInterval(() => {
      if (starCanvas.displayed) starCanvas.createStar();
    }, 1000);
  }
  render() {
    return (
      <section className="page">
        <div id="canvas-pad"/>
        <LetsWork/>
        <Footer/>
      </section>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object,
};
