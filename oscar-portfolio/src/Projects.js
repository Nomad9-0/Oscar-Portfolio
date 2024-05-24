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
            <Col>
                <Card style={{ width: '18rem' }}>
                <a href="https://www.visittheroots.com/">
                        <Card.Img variant="top" src={require('./images/rootsPage.PNG')} alt="The Roots Dispensary" width="300" height="180" />
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
                    <a href="https://preview.webflow.com/preview/lost-dungeons?utm_medium=preview_link&utm_source=designer&utm_content=lost-dungeons&preview=c0fffd65873a619faec38d9b7cc64a25&workflow=preview">
                        <Card.Img variant="top" src={require('./images/lostDungeon.gif')} alt="Lost DUngeon game" width="300" height="180" />
                    </a>
                    <Card.Body>
                        <Card.Title>Lost Dungeon</Card.Title>
                        <Card.Text>
                         A indie game developed and designed by me using C# and the Unity game engine.
                        </Card.Text>
                        <a href='https://github.com/Nomad9-0/Elderberry'>
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
                        <Card.Img variant="top" src={require('./images/Frostmaiden.JPG')} alt="Frostmaiden Character Secret" width="300" height="180" />
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
                    <a href="https://preview.webflow.com/preview/lost-dungeons?utm_medium=preview_link&utm_source=designer&utm_content=lost-dungeons&preview=c0fffd65873a619faec38d9b7cc64a25&workflow=preview">
                        <Card.Img variant="top" src={require('./images/HeroFace.PNG')} alt="Lost Dungeon" width="300" height="180" />
                    </a>
                    <Card.Body>
                        <Card.Title>Lost Dungeon</Card.Title>
                        <Card.Text>
                            A website that is in progress to promote an indie game developed by myself using the Unity game engine
                        </Card.Text>
                        <a href='https://github.com/Nomad9-0/Elderberry'>
                            <i className="fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={4}>
                <Card style={{ width: '18rem' }}>
                    <a href="https://nomad9-0.github.io/react-to-do-list/">
                        <Card.Img variant="top" src={require('./images/todo-list.JPG')} alt="React to do list" width="300" height="180" />
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
        <Row>
            <Col sm={4}>
                <Card style={{ width: '18rem' }}>
                    <a href="https://preview.webflow.com/preview/drsawyer?utm_medium=preview_link&utm_source=designer&utm_content=drsawyer&preview=a1d0b7b6793a17325effe0e18c9e2bc1&workflow=preview">
                        <Card.Img variant="top" src={require('./images/WebsiteHeroFaceDR.PNG')} alt="Medical Practice Website" width="300" height="180" />
                    </a>
                    <Card.Body>
                        <Card.Title>Dr. John Sawyer Medical Practice</Card.Title>
                        <Card.Text>
                            A medical practice website that is progress for a local doctor. 
                        </Card.Text>
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
       </Container>
    </>
    )
}

export default Projects;