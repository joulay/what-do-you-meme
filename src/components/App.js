import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';

import HeaderBar from './header-bar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />        
      </div>
    );
  }
}

export default App;