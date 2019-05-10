import React from 'react';
import "./css/MainContent.css";
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayUsers from "./DisplayUsers"
import SignupForm from "./SignupForm"

export default class MainContent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activity : this.props.activity
        }
    }

    render(){
        if (this.props.activity === "SignUp"){
            console.log(this.props.activity)
            return (
                <div className="mainContent">
                <Container>
                <SignupForm/>
                </Container>
                </div>
            )
        }else{
            console.log(this.state.activity)
            return (
                <div className="mainContent">
                <Container>
                <DisplayUsers/>
                </Container>
                </div>
            )
        }
    }   
}