import React from 'react';
import {Route} from 'react-router';
import Home from '../Home/Home';
import Header from '../../components/Header/Header';
import MyWork from '../MyWork/MyWork';
import ProjectWrapper from '../Project/ProjectWrapper';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header/>
        <div className="app">
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/projects" component={MyWork}/>
          <Route exact={true} path="/project/:name" component={ProjectWrapper}/>
        </div>
      </main>
    );
  }
}

export default App;
