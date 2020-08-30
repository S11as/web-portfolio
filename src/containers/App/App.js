import React from 'react';
import {Route} from 'react-router';
import Home from '../Home/Home';
import Header from '../../components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header/>
        <div className="app">
          <Route path="/" component={Home}/>
        </div>
      </main>
    );
  }
}

export default App;
