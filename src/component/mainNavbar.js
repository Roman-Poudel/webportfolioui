import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";



class MainNavbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="fixed-top sticky-top">
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/home">My Portfolio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/myskills">My Skills</Nav.Link>
                                <Nav.Link href="/projects">Projects</Nav.Link>
                                <Nav.Link href="/education">Education</Nav.Link>
                                <Nav.Link href="/contactme">Contact Me</Nav.Link>
                                <Nav.Link href="/blogs">Blogs</Nav.Link>
                                {/*<NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>*/}
                            </Nav>
                            <Nav>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default MainNavbar;
