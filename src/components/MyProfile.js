import React from 'react';
import "./css/MyProfile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Card, Button, Form} from 'react-bootstrap';
import Cookies from 'universal-cookie';
import axios from 'axios';

export default class MyProfile extends React.Component{

    constructor(props){
        super(props)
        this.cookies = new Cookies();
        this.state = {
            username : this.cookies.get('username'),
            aboutMe : "",
            aboutMeField : "",
            lastLogin : "",
            alertShow : false,
            alertVariant : "",
            alertMsg : ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getUserProfile = this.getUserProfile.bind(this);
    }

    handleInputChange(event) {
        let target = event.target;
        let name = target.name;
        this.setState({
            [name] : target.value
        })
    }

    handleSubmit(){
        axios.get(`http://localhost:8081/updateAbout?username=${this.state.username}&token=${this.cookies.get('authToken')}&about=${this.state.aboutMeField}`)
        .then(res =>res.data)
        .then((data) => {
            if (data.msg === "SUCCESS"){
                this.setState({
                    alertShow : true,
                    alertVariant : "success",
                    alertMsg : "Updated successfully."
                });
                this.getUserProfile() // this function setState automatically
            }else{
                this.setState({
                    alertShow : true,
                    alertVariant : "danger",
                    alertMsg : "Failed to update about."
                })
            }
        })
    }

    getUserProfile(){
        axios.get(`http://localhost:8081/reqUser?username=${this.state.username}`)
        .then(res => res.data.result)
        .then((data) => {
          this.setState({
              about: data.about,
              lastLogin : data.lastLogin
            })
        })
        .catch(console.log)
    }

    componentDidMount(){
        this.getUserProfile();
    }

    render(){
        return(
            <div className="myProfile">
            <Card>
            <Card.Header><h2><b>My Profile</b></h2></Card.Header>
            <Card.Body>
                <i className="fas fa-poo fa-4x"></i>
                <h2>{this.state.username}</h2>
                <p>"{this.state.about}"</p>
                <p>You were last logged in : {this.state.lastLogin}</p>
                <Form>
                <Form.Group controlId="ControlTextarea">
                <Form.Label>Change your Bio</Form.Label>
                <Form.Control as="textarea" rows="3" name="aboutMeField" onChange={this.handleInputChange}/>
                </Form.Group>
                <Button variant="primary" type="button" onClick={() => this.handleSubmit()}>Update Bio</Button>
                </Form>
                {this.state.alertShow && <Alert className="updateAboutAlert" variant={this.state.alertVariant}>{this.state.alertMsg}</Alert>}
            </Card.Body>
            </Card>
            </div>
        )
    }
}