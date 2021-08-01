import React, {Component} from 'react';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavLink from 'react-router-dom/NavLink';


class Footermenu extends Component {
    render() {
        /* Please Use NavLink instead of anchor tag <NavLink>, by importing Link from react-router-dom*/
        /* Ctrl + Alt + Shift + J shortcut to select all the occurrence of tag/variable */
        return (
            <div className="FooterMenu">
                <Container>
                    <footer>
                        <div className="footer">
                            <div className="text-light bg-dark ">
                                <div className="row">
                                    {/* Quick Address Book*/}
                                    <div className="col-3 text-muted footer-icon-bar">
                                        <div>
                                            <i className="fa fa-mobile-phone "></i>
                                            <span>Phone: 0424585308</span>
                                        </div>
                                        <div>
                                            <i className="fa fa-paper-plane "></i>
                                            <span>Email: poudelroman94@gmail.com</span>
                                        </div>
                                        <div>
                                            <i className="fa fa-map-marker"></i>
                                            <span>1/8 Cowper Street, Parramatta</span>
                                        </div>
                                    </div>
                                    {/* Quick Menu*/}
                                    <div className="col col-6 footer-icon-bar nav-link">
                                        <NavLink to="/home" className="text-muted me-4" data-toggle ="tooltip"
                                           title="Home" >
                                            <i className="fa fa-home " aria-valuetext="Home"/>
                                        </NavLink>
                                        <NavLink to="/contactme" className="me-4 text-muted"
                                           data-toggle="tooltip" title="Contact Me">
                                            <i className="fa fa-mobile"/>
                                        </NavLink>
                                        <NavLink to="/myskills" className="me-4 text-muted" data-toggle="tooltip"
                                           title=" My Skills ">
                                            <i className="fa fa-laptop"/>
                                        </NavLink>
                                        <NavLink to="/projects" className="me-4 text-muted" data-toggle="tooltip"
                                           title="My Projects">
                                            <i className="fa fa-code"/>
                                        </NavLink>
                                        <NavLink to="/blogs" className="me-4 text-muted" data-toggle="tooltip"
                                           title="My Blogs">
                                            <i className="fa fa-book"/>
                                        </NavLink>
                                        <NavLink to="/education" className="me-4 text-muted" data-toggle="tooltip"
                                           title="Education">
                                            <i className="fa fa-graduation-cap"/>
                                        </NavLink>
                                        <NavLink to="/experience" className="me-4 text-muted" data-toggle="tooltip"
                                           title="Experience">
                                            <i className="fa fa-wordpress"/>
                                        </NavLink>
                                    </div>
                                    {/* Social Links*/}
                                    <div className="col col-3 text-muted footer-icon-bar">
                                        <a href="https://www.facebook.com/poudelrp94"
                                           className="me-4 text-reset ">
                                            <i className="fa fa-facebook "></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/roman-poudel-36b78b167/"
                                           className="me-4 text-reset ">
                                            <i className="fa fa-linkedin "></i>
                                        </a>
                                        <a href="https://github.com/Roman-Poudel" className="me-4 text-reset ">
                                            <i className="fa fa-github "></i>
                                        </a>
                                        <a href="https://www.twitter.com/Rppoudel94" className="me-4 text-reset ">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="footer-copyright text-center">© 2021 Copyright:
                                    <a href="#" className="text-decoration-none" > iromanpoudel.com </a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </Container>
            </div>

        );
    }
}

export default Footermenu;
