import React from 'react';
import "./css/MainContent.css";
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayUsers from "./DisplayUsers"
import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm"

export default class MainContent extends React.Component {

    constructor(props){
        super(props);
        this.changeLogInState = this.changeLogInState.bind(this);
    }

    changeLogInState(isLoggedIn, username){
        // To be passed to child component for callback
        this.props.changeLogInState(isLoggedIn, username)
      }

    render(){
        // DisplayUsers is refreshed everytime you open home.
        return (
            <div className="mainContent">
            <Container>
            {this.props.activity === "SignUp" && <SignupForm/>}
            {this.props.activity === "Home" && <DisplayUsers/>}
            {this.props.activity === "Login" && <LoginForm changeLogInState = {this.changeLogInState} 
            isLoggedIn = {this.props.isLoggedIn} username = {this.props.username}/> }
            </Container>
            </div>
        )
    }   
}