import React from 'react';
import bg from './img/bg.png';
import PropTypes from 'prop-types';

function Description(props) {
  function setHeight() {
    const bg = document.getElementById('description-bg');
    const wrapper = document.getElementById('project-description-wrapper');
    wrapper.style.height = bg.height + 'px';
  }
  return (
    <section>
      <img src={bg} className="bg-image" id="description-bg"
        onLoad={setHeight.bind(this)}/>
      <div className="container" id="project-description-wrapper">
        <div className="row h-85 justify-content-center align-items-center">
          <div className="col-10">
            <div className="row mb-4 justify-content-center">
              <div className="col-auto project-description-title">
                {props.title}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto project-description-inner">
                {props.info}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Description.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};
export default Description;
