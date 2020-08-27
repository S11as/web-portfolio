import React from 'react';
import Header from "./Header";
import {Route} from "react-router";
import Home from "./pages/home/Home";

class App extends React.Component {
  render(){
    return(
    <main>
      <Header/>
      <div className="app">
          <Route path="/" component={Home}/>
      </div>
    </main>
    )
  }
}

export default App;
