import React from 'react';
import "./css/LoginForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Form} from 'react-bootstrap';

export default class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username : "",
            passwd : ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(){

    }

    handleSubmit(){
        
    }

    render(){
        return(
            <div className="loginFor">
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
                    SignUp
                </Button>
            </Form>
            </div>
            </Card>
            </div>
        )
    }
}