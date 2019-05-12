import React from 'react';
import "./css/MainContent.css";
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayUsers from "./DisplayUsers"
import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm"
import MyProfile from "./MyProfile"
import UserProfile from "./UserProfile"

export default class MainContent extends React.Component {

    constructor(props){
        super(props);
        this.changeLogInState = this.changeLogInState.bind(this);
        this.changeActivityTo = this.changeActivityTo.bind(this);
    }

    changeActivityTo(activityName){
        this.props.changeActivity(activityName);
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
            {this.props.activity === "Home" && <DisplayUsers changeActivity = {this.props.changeActivity} />}
            {this.props.activity === "Login" && <LoginForm changeLogInState = {this.changeLogInState} 
            isLoggedIn = {this.props.isLoggedIn} username = {this.props.username}/> }
            {this.props.activity === "MyProfile" && <MyProfile isLoggedIn = {this.props.isLoggedIn}/>}
            {this.props.activity[0] === "UserProfile" && <UserProfile username ={this.props.activity[1]} />}
            </Container>
            </div>
        ) // A smart way to display user profile :)))))))))
    }   
}