import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Skills.css';

function Skills() {
    return(
    <>
        <Container className='skillsContainer' id='skills'>
            <Row>
                <Col>
                    <i className="fas fa-code icons"></i>
                    <h3>Front-end</h3>
                    <p className='tools'>Tools</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>jQuery</li>
                        <li>Handlebars</li>
                        <li>Responsive Design</li> 
                    </ul>
                </Col>
                <Col>
                    <i className="fas fa-terminal icons"></i>
                    <h3>Backend</h3>
                    <p className='tools'>Tools</p>
                    <ul>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>Firebase</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>AJAX</li>
                        <li>APIs</li> 
                        <li>JSON</li>
                        <li>Java</li>
                    </ul>
                </Col>
                <Col>
                    <i className="fas fa-code-branch icons"></i>
                    <h3>Other</h3>
                    <p className='tools'>Tools</p>
                    <ul>
                        <li>Command Line</li>
                        <li>Git</li>
                        <li>Github</li>
                        <li>Heroku</li>
                        <li>Bitbucket</li>
                        <li>SEO</li> 
                    </ul>
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default Skills;