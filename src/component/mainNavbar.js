import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../assets/image/Logo.JPG";
import NavLink from "react-router-dom/NavLink";






class MainNavbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                {/*<div className="fixed-top sticky-top">*/}
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand>
                            <NavLink to="/home">
                                <img src={Logo} alt="My Logo" height="50"
                                     class="img-responsive"/>
                            </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="nav-item">
                                <NavLink className="nav-link" to="/myskills">My Skills</NavLink>
                                <NavLink className="nav-link" to="/projects">Projects</NavLink>
                                <NavLink className="nav-link" to="/education">Education</NavLink>
                                <NavLink className="nav-link" to="/experience">Experience</NavLink>
                                <NavLink className="nav-link" to="/contactme">Contact Me</NavLink>
                                <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                {/*</div>*/}
            </div>
        );
    }
}

export default MainNavbar;
