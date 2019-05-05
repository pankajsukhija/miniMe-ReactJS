import React from 'react';
import "./css/MainContent.css";
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DisplayUsers from "./DisplayUsers"


export default class MainContent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            latestUsers : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/latestUsers')
        .then(res => res.data.result)
        .then((data) => {
          this.setState({ latestUsers: data })
          console.log(data)
        })
        .catch(console.log)
      }

    render(){
        return (
            <div className="mainContent">
            <Container>
            <h2><b>Our Latest Users</b></h2>
            <DisplayUsers usersList={this.state.latestUsers}/>
            </Container>
            </div>
        );
    }   
}