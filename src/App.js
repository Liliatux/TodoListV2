import React, { Component } from 'react';
import './App.css';
import List from './List.js';
import Tache from './Tache.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Truc à faire</h2>
        </div>
        <div className="App-container">
          <List/>
          <Tache/>
        </div>
      </div>
    );
  }
}

export default App;
