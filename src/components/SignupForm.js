import React from 'react';
import "./css/SignupForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Card, Button, Form} from 'react-bootstrap';
import axios from 'axios';

export default class SignupForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username : "",
            email : "",
            passwd : "",
            alertShow : false,
            alertVariant : "",
            alertMsg : ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        let email = this.state.email
        let passwd = this.state.passwd
        console.log(this.state)
        let req = `http://localhost:8081/regUser?username=${username}&passwd=${passwd}&email=${email}`
        console.log(req)
        axios.get(req)
        .then((res) => res.data.msg)
        .catch((err)=> console.log(err))
        .then((msg) => {
            console.log(`User Registration Status : ${msg}`)
            if (msg === "SUCCESS"){
                this.setState({
                    alertShow : true,
                    alertVariant : "success",
                    alertMsg : "Registered Sucessfully. Please proceed to Login."
                })
            }else{
                this.setState({
                    alertShow : true,
                    alertVariant : "danger",
                    alertMsg : "Registation failed. Make sure username and password is atleast 8 character."
                })
            }
        })
    }

    render(){
        return(
            <div className = "signupForm">
            <Card>

            <Card.Header><h2><b>SignUp</b></h2></Card.Header>
            <div className="signupFormBlock">
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter username" onChange={this.handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleInputChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else. No promise though.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="passwd" placeholder="Password" onChange={this.handleInputChange}/>
                </Form.Group>

                <Button variant="primary" type="button" onClick={() => this.handleSubmit()}>
                    SignUp
                </Button>
                {this.state.alertShow && <Alert className="signupAlert" variant={this.state.alertVariant}>{this.state.alertMsg}</Alert>}
            </Form>
            </div>
            </Card>
            </div>
        )
    }
}