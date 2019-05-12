import React from 'react';
import "./css/MyProfile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import axios from 'axios';

export default class MyProfile extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username : this.props.username,
            bio : "",
            lastLogin : "",
        }

        this.getUserProfile = this.getUserProfile.bind(this);
    }

    componentDidMount(){
        this.getUserProfile();
    }

    getUserProfile(){
        axios.get(`http://localhost:8081/reqUser?username=${this.props.username}`)
        .then(res => res.data.result)
        .then((data) => {
          this.setState({
              bio: data.about,
              lastLogin : data.lastLogin
            })
        })
        .catch(console.log)
    }

    render(){
        return(
            <div className="userProfile">
            <Card>
            <Card.Header><h2><b>{this.props.username}'s Profile</b></h2></Card.Header>
            <Card.Body>
                <i className="fas fa-poo fa-4x"></i>
                <h2>{this.props.username}</h2>
                <p>"{this.state.bio}"</p>
                <p>{this.props.username} was last logged in : {this.state.lastLogin}</p>
            </Card.Body>
            </Card>
            </div>
        )
    }
}