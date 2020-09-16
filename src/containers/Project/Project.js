import React from 'react';
import LetsWork from '../../components/LetsWork/LetsWork';
import Footer from '../../components/Footer/Footer';
import {Canvas as StarCanvas} from '../Home/canvas/src/js/StarCanvas/Canvas';
import Description from '../../utils/Description/Description';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Stack from '../../components/Stack/Stack';
import Bubbles from '../../components/Bubbles/Bubbles';
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
        <Description title={this.props.project.description.title}
          info={this.props.project.description.info}/>
        <ImageSlider images={this.props.project.images}/>
        <Stack stack={this.props.project.stack}/>
        <Bubbles
          title="Want to see it closer?"
          addition={(
            <a className="primary-button" href={this.props.project.innerLink}>
              Yes!
            </a>
          )}
          longAnimation={true}
        />
        <LetsWork/>
        <Footer/>
      </section>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object,
};
