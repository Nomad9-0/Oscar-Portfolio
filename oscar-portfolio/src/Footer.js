import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer() {
    return(
    <>
    <Jumbotron fluid className="footer">
        <Container>
            <p>Interested in working together?</p>
            <p>Lets Chat!</p>
            <p className='email'>Email: Ojimenezlmpc@gmail.com</p>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                <a href="https://www.linkedin.com/in/oscar-jimenez-b2a58a55/">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                </Col>
                <Col>
                <a href="https://github.com/Nomad9-0">
                    <i className="fab fa-github"></i>
                </a>
                </Col>
                <Col><a href="https://www.instagram.com/ojimenezca/">
                    <i className="fab fa-instagram"></i>
                </a></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
    </Jumbotron>
    </>
    )
}

export default Footer;