import React from 'react';
import "./css/DisplayUsers.css";
import {Card, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class DisplayUsers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            latestUsers : [],
        }
        this.changeActivityTo = this.changeActivityTo.bind(this);
        this.usernameOnClick = this.usernameOnClick.bind(this);
    }

    usernameOnClick(username){
        this.changeActivityTo(["UserProfile", username])
    }

    changeActivityTo(activityName){
        this.props.changeActivity(activityName);
    }

    componentDidMount() {
        axios.get('http://localhost:8081/latestUsers')
        .then(res => res.data.result)
        .then((data) => {
          this.setState({ latestUsers: data })
        })
        .catch(console.log)
    }

    render(){
        return(
            <div className = "usersList">
            <Card>
            <Card.Header><h2><b>Our Latest Users</b></h2></Card.Header>
            <div className="allUsers">
            <p>Visit a user's profile by clicking their username :)</p>
            <Row className="userBox">
            {this.state.latestUsers.map((userData) => (
                    <Col sm={4}>
                    <div className="userData">
                    <i className="fas fa-poo fa-4x"></i>
                    <h4 className="username" onClick={()=>this.usernameOnClick(userData.username)}>{userData.username}</h4>
                    <h6 className="userAbout">{userData.about}</h6>
                    </div>
                    </Col>
            ))}
            </Row>
            </div>
            </Card>
            </div>
        )
    }
/*    render(){
        let latestUsers = [{username : "Goku", about : "this is my about, i am a super saiyan"},
                            {username : "Gohan", about : "Hello There! I am Son Goku's son Gohan :) It's been a long time since I last trined."},
                            {username : "Bulma", about : "Where are you Vegeta ?"},
                            {username : "Vegeta", about : "Damn You! Kakarot! I am the prince of Saiyans"},
                            {username : "Krilin", about : "I dont wanna die again"},
                            {username : "LoganPaul", about : "Look at this dead body!"}]
        return(
            <div className = "usersList">
            <Card>
            <Card.Header><h2><b>Our Latest Users</b></h2></Card.Header>
            <div className="allUsers">
            <Row>
            {latestUsers.map((userData) => (
                    <Col sm={4}>
                    <div className="userData">
                    <i className="fas fa-poo fa-4x"></i>
                    <h5 className="username">{userData.username}</h5>
                    <h6 className="userAbout">{userData.about}</h6>
                    </div>
                    </Col>
            ))}
            </Row>
            </div>
            </Card>
            </div>
        )
    } */
} 