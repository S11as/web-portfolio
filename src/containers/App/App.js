import React from 'react';
import {Route} from 'react-router';
import Home from '../Home/Home';
import Header from '../../components/Header/Header';
import MyWork from '../MyWork/MyWork';
import ProjectWrapper from '../Project/ProjectWrapper';
import Footer from '../../components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <main className="app">
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/projects" component={MyWork}/>
          <Route exact={true} path="/project/:name" component={ProjectWrapper}/>
        </main>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
