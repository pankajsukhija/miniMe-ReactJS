import React, { Component } from 'react';
import Header from './components/Header.js';
import MainContent from './components/MainContent';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
      </div>
    );
  }
}

export default App;
