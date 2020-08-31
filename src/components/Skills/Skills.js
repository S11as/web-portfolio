import React from 'react';
import Card from '../Card/Card';
import RedWrapper from '../../utils/RedWrapper';

import img from './img/skills-bg.png';

class Skills extends React.Component {
  render() {
    return (
      <section>
        <img src={img} className="bg-image"/>
        <div className="container skills-wrapper">
          <div className="row justify-content-between mb-5">
            <Card>
              <div className="row justify-content-center">
                <RedWrapper active={true} font={25}>
                  Front End
                </RedWrapper>
              </div>
            </Card>
            <Card>
              <div className="row justify-content-center">
                <RedWrapper active={false} white={true} font={25}>
                  Back End
                </RedWrapper>
              </div>
            </Card>
          </div>
          <div className="row justify-content-center">
            <Card>
              <div className="row justify-content-center">
                <RedWrapper active={false} white={true} font={25}>
                  Design
                </RedWrapper>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
