import React, { Component } from "react";
import "./HomePage.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import photo1 from "./HomePageImg/screenshot1.png"
import photo2 from "./HomePageImg/screenshot2.png"
import photo4 from "./HomePageImg/screenshot4.png"

class HomePage extends Component {

    render() {
        return (
            <Container>
                <div className="video-background">
                    <div className="video-foreground">
                        <iframe src="https://www.youtube.com/embed/9Xde7KV3tXE?autoplay=1&amp;version=3&amp;loop=1&amp;playlist=9Xde7KV3tXE" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="background-movie"></iframe>
                    </div>
                </div>
                <Row>
                    <Col>
                        <Card className="colorOnly topCard">
                            <CardBody>
                                <CardTitle id="mainHeader">Crystal Collector</CardTitle>
                                <CardText>Crystal Collector is a desktop game that was developed for private use as part of a final project for the University of California, Irvine Web Development Bootcamp Spring 2018 by Tricia Leavitt.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="/MakingTheGame">
                            <Card className="colorNHover">
                                <CardImg top width="100%" src={photo1} alt="Game Screenshot 1" />
                                <CardBody>
                                    <CardTitle>Making the Game</CardTitle>
                                    <CardText>Find out how the game was made and get links to resources.</CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6">
                        <a href="MediaGallery">
                            <Card className="colorNHover">
                                <CardImg top width="100%" src={photo2} alt="Dragon Flying" />
                                <CardBody>
                                    <CardTitle>Media Gallery</CardTitle>
                                    <CardText>Visit the media gallery to see content photos and video, as well as behind-the-scenes clips.</CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                    <Col sm="12" lg="6">
                        <a href="Contact">
                            <Card className="colorNHover">
                                <CardImg top width="100%" src={photo4} alt="Enemy Ahead" />
                                <CardBody>
                                    <CardTitle>Forum</CardTitle>
                                    <CardText>Have comments, questions, or suggestions? Visit the Forum!</CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default HomePage;