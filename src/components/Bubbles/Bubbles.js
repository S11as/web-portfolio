import React from 'react';

import bg from './img/bubbles-bg.png';
export default class Bubbles extends React.Component {
  render() {
    return (
      <section>
        <img src={bg} alt="" className="bg-image image-fluid"/>
      </section>
    );
  }
}
