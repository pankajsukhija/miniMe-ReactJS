import React from 'react';
import "./css/Header.css";
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            siteTitle : "miniMe"
        }
        this.changeActivityTo = this.changeActivityTo.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    changeActivityTo(activityName){
        this.props.changeActivity(activityName);
    }

    logOut(){
        this.props.changeLogInState(false, "")
        const cookies = new Cookies();
        cookies.remove('username');
        cookies.remove('authToken');
    }
    render(){
        return (
            <div className="topnav">
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#" onClick={() => this.changeActivityTo("Home")}>
                <i className="far fa-grin-beam" aria-hidden="true"></i> {this.state.siteTitle}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#" onClick={() => this.changeActivityTo("Home")}>Home</Nav.Link>
                    {!this.props.isLoggedIn && <Nav.Link href="#" onClick={() => this.changeActivityTo("Login")}>Login</Nav.Link> }
                    {this.props.isLoggedIn && <Nav.Link href="#" onClick={() => this.logOut()}>Logout</Nav.Link> }
                    <Nav.Link href="#" onClick={() => this.changeActivityTo("SignUp")}>SignUp</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }   
}