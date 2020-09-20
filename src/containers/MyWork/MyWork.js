import React from 'react';
import Footer from '../../components/Footer/Footer';
import LetsWork from '../../components/LetsWork/LetsWork';

import Card from '../../components/Card/Card';
import PrimaryButton from '../../utils/PrimaryButton/PrimaryButton';
import {Link} from 'react-router-dom';
import StarCanvas from '../../components/Canvas/StarCanvas';
import projects from '../../lib/Projects/projects';

export default class MyWork extends React.Component {
  render() {
    const cards = [];
    for (const project in projects) {
      if (projects.hasOwnProperty(project)) {
        const data = projects[project];
        cards.push(
            <Card key={project}>
              <div className="container">
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
              </div>
            </Card>,
        );
      }
    }
    return (
      <section className="page">
        <StarCanvas
          text={'All projects in one place'}
          quote={'“If you have any idea, start now, don’t wait.”'}
        />
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
