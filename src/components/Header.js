import React from 'react';
import "./css/Header.css";
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            siteTitle : "miniMe"
        }
        this.changeActivityTo = this.changeActivityTo.bind(this);
    }

    changeActivityTo(activityName){
        this.props.changeActivity(activityName);
    }

    render(){
        return (
            <div className="topnav">
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#"><i className="far fa-grin-beam" aria-hidden="true"></i> {this.state.siteTitle}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#" onClick={() => this.changeActivityTo("Home")}>Home</Nav.Link>
                    <Nav.Link href="#">Login</Nav.Link>
                    <Nav.Link href="#" onClick={() => this.changeActivityTo("SignUp")}>Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }   
}