import React from 'react';
import LetsWork from '../../components/LetsWork/LetsWork';
import Footer from '../../components/Footer/Footer';
import Description from '../../utils/Description/Description';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Stack from '../../components/Stack/Stack';
import Bubbles from '../../components/Bubbles/Bubbles';
import StarCanvas from '../../components/Canvas/StarCanvas';
import PropTypes from 'prop-types';

export default class Project extends React.Component {
  render() {
    return (
      <section className="page">
        <StarCanvas
          text={this.props.project.description.title}
          quote={'“Imagine. Create Design. Build. Deploy.”'}
        />
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
