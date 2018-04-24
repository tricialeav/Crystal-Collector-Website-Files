import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
    Col,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import "./NavBar.css";

class NavBar extends Component {

    render() {
        return (
                <Nav>
                    <Col sm="12" md="3">
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    </Col>
                    <Col sm="12" md="3">
                    <NavItem>
                        <NavLink href="/MakingTheGame">Making the Game</NavLink>
                    </NavItem>
                    </Col>
                    <Col sm="12" md="3">
                    <NavItem>
                        <NavLink href="/MediaGallery">Media Gallery</NavLink>
                    </NavItem>
                    </Col>
                    <Col sm="12" md="3">
                    <NavItem>
                        <NavLink href="/Contact">Forum</NavLink>
                    </NavItem>
                    </Col>
                </Nav>
        )
    }
}
export default NavBar;