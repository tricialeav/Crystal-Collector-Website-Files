import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Footer.css";
import { Card, CardSubtitle, CardText, Row } from 'reactstrap';

class Footer extends Component {

    render() {
        return (
                <Row>
                    <Card body className="nav" id="footer">
                        <CardText>
                            <a href="mailto:tricialeavittdevelopment@gmail.com?subject=Crystal%20Collector%20Inquiry" className="fa fa-envelope fa-2x icon" id="envelope" aria-hidden="true" target="_blank" rel="noopener noreferrer"></a>
                            <a href="https://github.com/tricialeav" className="fa fa-github fa-2x icon" id="github" aria-hidden="true" target="_blank" rel="noopener noreferrer"></a>
                            <a href="https://www.linkedin.com/in/tricia-leavitt" className="fa fa-linkedin-square fa-2x icon" id="linkedin" aria-hidden="true" target="_blank" rel="noopener noreferrer"></a>
                            <a href="https://stackoverflow.com/users/8994208/tricia-leavitt" className="fa fa-stack-overflow fa-2x icon" id="stack" aria-hidden="true"
                                target="_blank" rel="noopener noreferrer"></a>
                            <a href="https://twitter.com/TriciaLeav" className="fa fa-twitter fa-2x icon" id="twitter" aria-hidden="true" target="_blank" rel="noopener noreferrer"></a>
                            </CardText>
                        <CardSubtitle id="copyright">&copy; Tricia Leavitt 2018</CardSubtitle>
                    </Card>
                </Row>
        )
    }
}
export default Footer;