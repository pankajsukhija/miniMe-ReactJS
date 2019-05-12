import React, { Component } from 'react';
import Header from './components/Header.js';
import MainContent from './components/MainContent';
import './App.css';
import Cookies from 'universal-cookie';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Home / Login / SignUp / UserProfile
        activity : "Home",
        isLoggedIn : false,
        username : "",
    }

    this.changeActivity = this.changeActivity.bind(this);
    this.changeLogInState = this.changeLogInState.bind(this);
  }

  componentDidMount(){
    const cookies = new Cookies();
    // Check if user logged in previously.
    if (cookies.get("authToken")){
      this.setState({
        isLoggedIn : true,
        username : cookies.get("username")
      })
    }
  }

  changeLogInState(isLoggedIn, username){
    this.setState({
      isLoggedIn : isLoggedIn, // true / false
        username : username
    })
  }

  changeActivity(updatedActivity){
    // To be passed to child components to change the state of activity using callback
    this.setState({activity : updatedActivity})
    // REMINDER : dont use .this with this.. hmm.. ?? it will screw you up!
  }

  render() {
    return (
      <div className="App">
        <Header changeActivity = {this.changeActivity} isLoggedIn = {this.state.isLoggedIn} 
        username = {this.state.username} changeLogInState = {this.changeLogInState}/>
        <MainContent activity = {this.state.activity} changeActivity = {this.changeActivity} 
        changeLogInState = {this.changeLogInState} isLoggedIn = {this.state.isLoggedIn} 
        username = {this.state.username} />
      </div>
    );
  }
}

export default App;
