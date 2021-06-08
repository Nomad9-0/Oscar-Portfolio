import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Projects.css';

function Projects() {
    return(
    <>
       <Container className='projectsContainer' id='projects'>
            <h2>My Recent Work</h2>
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <a href="https://mentor-me-38928.herokuapp.com/">
                        <Card.Img variant="top" src={require('./images/mentor-me.jpg')}alt="Mentor Me" />
                    </a>
                    <Card.Body>
                        <Card.Title>Mentor.Me</Card.Title>
                        <Card.Text>
                            A web app created to connect new professionals with industry professional in a Mentor/Mentee relationship.
                        </Card.Text>
                        <a href='https://github.com/Nomad9-0/MentorMe'>
                            <i className="fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <a href="https://pacific-ravine-32817.herokuapp.com/">
                        <Card.Img variant="top" src={require('./images/doggy.JPG')} alt="Doggy Diary" width="300" height="180" />
                    </a>
                    <Card.Body>
                        <Card.Title>Doggy Diary</Card.Title>
                        <Card.Text>
                        Track your dogs behaviors and get fun information about their breed. Built with Handlebars, NodeJS, JavaScript, Charts.js, CSS, and MySql
                        </Card.Text>
                        <a href='https://github.com/Nomad9-0/Doggy-Diary'>
                            <i className="fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <a href="https://nomad9-0.github.io/React-Currency-Converter/">
                        <Card.Img variant="top" src={require('./images/currency.JPG')} alt="Currency Converter" width="300" height="180" />
                    </a>
                    <Card.Body>
                        <Card.Title>React Currency Converter</Card.Title>
                        <Card.Text>
                        Created a React app to convert currency using exchangeratesapi.io api to practice fetch and React Hooks.
                        </Card.Text>
                        <a href='https://github.com/Nomad9-0/React-Currency-Converter'>
                            <i className="fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <a href="https://kiarras-matches.herokuapp.com/">
                        <Card.Img variant="top" src={require('./images/friend-finder.JPG')} alt="Friend Finder" width="300" height="180" />
                    </a>
                    <Card.Body>
                        <Card.Title>Friend Finder</Card.Title>
                        <Card.Text>
                        A compatibility-based "FriendFinder" application. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. Technologies: Express, Node, Heroku, jQuery
                        </Card.Text>
                        <a href='https://github.com/Nomad9-0/Friend-Finder'>
                            <i className="fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                <a href="https://nomad9-0.github.io/roots-dispensary/index.html">
                        <Card.Img variant="top" src={require('./images/roots.JPG')} alt="The Roots Dispensary" width="300" height="180" />
                    </a>
                    <Card.Body>
                        <Card.Title>The Roots Dispensary</Card.Title>
                        <Card.Text>
                        Freelance website for a local dispensary to improve design, SEO, and webstore traffic.
                        </Card.Text>
                        <Card.Text>
                            <i className="fas fa-tools"></i>
                            In Development
                        </Card.Text>
                        <a href='https://github.com/Nomad9-0/roots-dispensary'>
                            <i className="fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <a href="https://nomad9-0.github.io/Nomad/">
                        <Card.Img variant="top" src={require('./images/nomad.JPG')} alt="nomad Travel App" width="300" height="180" />
                    </a>
                    <Card.Body>
                        <Card.Title>Nomad</Card.Title>
                        <Card.Text>
                        A web app designed for travelers who wish to get their destinations weather, news, and events all in one place. Technologies used were HTML, CSS, JavaScript, jQuery, Firebase, OpenWeather API, New York Time APi, and TicketMaster API.
                        </Card.Text>
                        <a href='https://github.com/Nomad9-0/Nomad'>
                            <i className="fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={4}>
                <Card style={{ width: '18rem' }}>
                    <a href="https://nomad9-0.github.io/frostmaiden-character-secrets/">
                        <Card.Img variant="top" src={require('./images/Frostmaiden.JPG')} alt="Friend Finder" width="300" height="180" />
                    </a>
                    <Card.Body>
                        <Card.Title>Rime of the Frostmaiden Secret Generator</Card.Title>
                        <Card.Text>
                            A web app for the Dungeons & Dragons rpg campaign Icewinddale: Rime of the Frostmaiden. This web app generates a secret at random for players backstories. Technologies: React 
                        </Card.Text>
                        <a href='https://github.com/Nomad9-0/frostmaiden-character-secrets'>
                            <i className="fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={4}>
                <Card style={{ width: '18rem' }}>
                    <a href="https://nomad9-0.github.io/react-to-do-list/">
                        <Card.Img variant="top" src={require('./images/todo-list.JPG')} alt="Friend Finder" width="300" height="180" />
                    </a>
                    <Card.Body>
                        <Card.Title>React To Do List</Card.Title>
                        <Card.Text>
                            A simple to do list created in React to practice react hooks. Users can create, edit, and delete tasks. 
                        </Card.Text>
                        <a href='https://nomad9-0.github.io/react-to-do-list/'>
                            <i className="fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
            
        </Row>
       </Container>
    </>
    )
}

export default Projects;