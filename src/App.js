import React, { Component } from 'react';
import Header from './components/Header.js';
import MainContent from './components/MainContent';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Home / Login / SignUp / UserProfile
        activity : "Home"
    }
    this.changeActivity = this.changeActivity.bind(this);
  }

  changeActivity(updatedActivity){
    console.log("Before setState : " + this.state.activity);
    // To be passed to child components to change the state of activity using callback
    this.setState({activity : updatedActivity})
    // REMINDER : dont use .this with this.. hmm.. ?? it will screw you up!

    console.log("After setState : " + this.state.activity);
  }

  render() {
    return (
      <div className="App">
        <Header changeActivity = {this.changeActivity}/>
        <MainContent activity = {this.state.activity} changeActivity = {this.changeActivity}/>
      </div>
    );
  }
}

export default App;
