import React from 'react';
import "./css/MyProfile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Form} from 'react-bootstrap';
import Cookies from 'universal-cookie';

export default class MyProfile extends React.Component{

    componentDidMount(){
        if (this.props.isLoggedIn){
            const cookies = new Cookies();
            this.username = cookies.get('username');
            this.authToken = cookies.get('authToken');
            ///////////////////////////
        }

    }

    render(){
        return(
            <div className="myProfile">
            <Card>
            <Card.Header><h2><b>My Profile</b></h2></Card.Header>
            </Card>
            </div>
        )
    }
}