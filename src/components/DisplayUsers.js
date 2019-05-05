import React from 'react';
import "./css/DisplayUsers.css";
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class DisplayUsers extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "usersList">
            <Row prop>
            {this.props.usersList.map((userData) => (
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
        )
    }
}