import React from 'react';
import "./css/SignupForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form} from 'react-bootstrap';

export default class SignupForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isHidden : false
        }
    }

    render(){
        if (this.state.isHidden === false){
            return(
                <div className = "signupForm">
                <Card>
    
                <Card.Header><h2><b>SignUp</b></h2></Card.Header>
                <div className="signupFormBlock">
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else. No promise though.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
    
                    <Button variant="primary" type="submit">
                        SignUp
                    </Button>
                </Form>
                </div>
                </Card>
                </div>
            )
        }else{
        return("");
        }
    }
}