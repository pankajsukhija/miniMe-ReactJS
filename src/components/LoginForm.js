import React from 'react';
import "./css/LoginForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Card, Button, Form} from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username : "",
            passwd : "",
            alertShow : false,
            alertVariant : "",
            alertMsg : ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        let target = event.target;
        let name = target.name;
        this.setState({
            [name] : target.value
          })
        }

    handleSubmit(){
        this.setState({
            alertShow : false,
        }) // hides alert on re-click untill request is completed:)
        let username = this.state.username
        let passwd = this.state.passwd
        console.log(this.state)
        let req = `http://localhost:8081/authUser?username=${username}&passwd=${passwd}`
        console.log(req)
        axios.get(req)
        .then((res) => res.data)
        .catch((err)=> console.log(err))
        .then((data) => {
            console.log(`User login status : ${data.msg}`);
            if (data.msg === "SUCCESS"){
                const cookies = new Cookies();
                // Set cookies value for token recieved frm server
                cookies.set('username', username , { path: '/' });
                cookies.set('authToken', data.token , { path: '/' });
                // changes state in App.js
                this.props.changeLogInState(true, username);
            }else{
                this.setState({
                    alertShow : true,
                    alertVariant : "danger",
                    alertMsg : "Login Failed. Make sure username and password is correct. If it is correct then someone has written some bad code."
                })
            }
        })
    }

    render(){
        if (this.props.isLoggedIn){
            return(
                <div className="loginFor">
                <Card>
                <Card.Header><h2><b>Login Page</b></h2></Card.Header>
                <Card.Body>You are logged in as <b>{this.props.username}</b> :)</Card.Body>
                </Card>
                </div>
            )
        }else{
            return(
                <div className="loginForm">
                <Card>
                <Card.Header><h2><b>Login Page</b></h2></Card.Header>
                <div className="loginFormBlock">
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder="Enter username" onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="passwd" placeholder="Password" onChange={this.handleInputChange}/>
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={() => this.handleSubmit()}>
                        Login
                    </Button>
                    {this.state.alertShow && <Alert className="signupAlert" variant={this.state.alertVariant}>{this.state.alertMsg}</Alert>}
                </Form>
                </div>
                </Card>
                </div>
            )
        }
    }
}