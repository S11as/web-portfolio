import React from 'react';

import Bubbles from '../../components/Bubbles/Bubbles';

import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import LetsWork from '../../components/LetsWork/LetsWork';
import Footer from '../../components/Footer/Footer';

import StarCanvas from '../../components/Canvas/StarCanvas';
class Home extends React.Component {
  render() {
    return (
      <section className="page">
        <StarCanvas
          text={'Hi, Im Kirill, Web developer'}
          quote={'“Digital design is like painting, except ' +
          'the paint never dries.”'}
        />
        <Bubbles
          title="I design and code beautiful
                  websites, with love and passion"
          addition={
            (
              <span className="text-center d-inline-block">
                &quot;Web is everywhere that&apos;s why we
                must make most of it&quot;
              </span>
            )
          }
        />
        <Skills/>
        <Projects/>
        <LetsWork/>
        <Footer/>
      </section>
    );
  }
}

export default Home;
