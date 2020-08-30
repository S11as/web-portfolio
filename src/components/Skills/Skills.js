import React from 'react';
import Card from '../Card/Card';

import img from './img/skills-bg.png';

class Skills extends React.Component {
  render() {
    return (
      <section>
        <img src={img} className="bg-image"/>
        <Card>
          <div>Hello</div>
        </Card>
      </section>
    );
  }
}

export default Skills;
