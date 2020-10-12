import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './Hero.css';

function Hero() {
    return(
    <>
        <Jumbotron fluid>
            <Container>
                <img className='oscarPic' src={require('./images/oscar.jpg')}alt="Oscar" />
                <h1>Oscar Jimenez: Software Developer</h1>
                <h2>I create web apps and SEO optamized websites</h2>
            </Container>
        </Jumbotron>
        <div className='about' id='home'>
            <h3>Hi I'm Oscar.</h3>
            <p>I began teaching myself web-developing skills in late 2016 and began taking on freelancing jobs in late 2017. My constant drive to learn new skills fit perfectly with programming. I love learning and perfecting my craft. I decided to join the UCLA Coding Bootcamp to expand my skills with front and back end web-development. I look forward to working on projects where I can, not only apply my skills, but also continue growing as a developer.
            </p>
            <p>
            For fun, I play video games, board games, Dungeons & Dragons, and adventure outdoors. I challenge my self physically by competing in obstacle course races such as Spartan Races, going on long difficult hikes, mountain biking, and boxing. I love to read and learn from people who inspire me. Some of my favorite books are Extreme Ownership by Jocko Willink and The 4-Hour Workweek by Tim Ferris. I have been described by friends as motivating because I never give up and don’t let them give up on goals and challenges set in front of us.
            </p>
        </div>
    </>
    )
}

export default Hero;