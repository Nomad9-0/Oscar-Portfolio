import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import './Testimonials.css';

function Testimonials() {
    return(
    <>
        <Container className="testimonialContainer">
            <h2>Testimonials</h2>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('./images/ffffff.png')}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <img
                    className="img-test"
                    src={require('./images/michael.jpg')}
                    alt="First slide"
                    />
                    <h3>Michael Putterflam</h3>
                    <p className='title'>Software & Full Stack Web Developer</p>
                    <p>"Oscar works hard. He is volunteers for tasks that need to be accomplished and works his hardest to complete them in a timely manner. If you need help, he will provide you with assistance. He knows the front end and back end well. His positive personality makes him a joy to work with."</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('./images/ffffff.png')}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <img
                    className="img-test"
                    src={require('./images/jennifer.jpg')}
                    alt="Third slide"
                    />
                    <h3>Jennifer Woo</h3>
                    <p className='title'>Business Manager + Full Stack Web Developer</p>
                    <p>"I worked with Oscar on two group projects, building an app over the span of 2-4 weeks each time. Oscar is wonderful to work with thanks to his dedication to problem-solving and personable attitude. He is quick to take on extra work where the project needs it and adds positivity to the group dynamic."</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    </>
    )
}

export default Testimonials;