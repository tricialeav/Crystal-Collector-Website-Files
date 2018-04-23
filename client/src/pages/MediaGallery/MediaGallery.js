import React, { Component } from "react";
import "./MediaGallery.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Row, Card, CardBody, CardTitle } from 'reactstrap';

class MediaGallery extends Component {

    render() {
        return (
            <Container>
                 <Col>
                    <Card className="colorOnly">
                        <CardBody>
                            <CardTitle id="mainHeader">Behind-the-Scenes Videos</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Row>
                    <Col md="12" lg="6">
                <Card className="colorOnly">
                    <CardBody>
                        <CardTitle>Setting up the Scene</CardTitle>
                        <iframe src="https://www.youtube.com/embed/ODa8qbX1cHo" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Behind the scenes 1" className="mediaVids"></iframe>
                    </CardBody>
                </Card>
                </Col>
                <Col md="12" lg="6">
                <Card className="colorOnly">
                    <CardBody>
                        <CardTitle>Moving the Character</CardTitle>
                        <iframe src="https://www.youtube.com/embed/hvAPP6OdFHw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Character Movement" className="mediaVids"></iframe>
                    </CardBody>
                </Card>
                </Col>
                </Row>
                <Row>
                <Col md="12" lg="6">
                <Card className="colorOnly">
                    <CardBody>
                        <CardTitle>Beginning Animation Events</CardTitle>
                        <iframe src="https://www.youtube.com/embed/AzJ745i_NgQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Animations" className="mediaVids"></iframe>
                    </CardBody>
                </Card>
                </Col>
                <Col md="12" lg="6">
                <Card className="colorOnly">
                    <CardBody>
                        <CardTitle>Setting up the In-Game Camera</CardTitle>
                        <iframe src="https://www.youtube.com/embed/QZy44UQpXjQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Camera Controls" className="mediaVids"></iframe>
                    </CardBody>
                </Card>
                </Col>
                </Row>
                <Row>
                <Col md="12" lg="6">
                <Card className="colorOnly">
                    <CardBody>
                        <CardTitle>Interacting with Items</CardTitle>
                        <iframe src="https://www.youtube.com/embed/cZGnE0Gaw5o" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Item Interaction" className="mediaVids"></iframe>
                    </CardBody>
                </Card>
                </Col>
                <Col md="12" lg="6">
                <Card className="colorOnly">
                    <CardBody>
                        <CardTitle>Character Collisions</CardTitle>
                        <iframe src="https://www.youtube.com/embed/5Yp1OsQ-I54" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Collisions" className="mediaVids"></iframe>
                    </CardBody>
                </Card>
                </Col>
                </Row>
                <Row>
                <Col md="12" lg="6">
                <Card className="colorOnly">
                    <CardBody>
                        <CardTitle>Score/Health Updater, Enemy NPCs</CardTitle>
                        <iframe src="https://www.youtube.com/embed/ZTrp0TLKT6M" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Health Score Enemies" className="mediaVids"></iframe>
                    </CardBody>
                </Card>
                </Col>
                <Col md="12" lg="6">
                <Card className="colorOnly">
                    <CardBody>
                        <CardTitle>Gameplay <br/> (No Sound)</CardTitle>
                        <iframe src="https://www.youtube.com/embed/XIrgNRtObyY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Gameplay" className="mediaVids"></iframe>
                    </CardBody>
                </Card>
                </Col>
                </Row>
            </Container >
        )
    }
}

export default MediaGallery;