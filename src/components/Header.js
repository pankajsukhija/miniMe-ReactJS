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
    }

    render(){
        return (
            <div className="topnav">
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><i className="far fa-grin-beam" aria-hidden="true"></i> {this.state.siteTitle}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Login</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }   
}