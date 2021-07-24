import React, {Component} from 'react';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


class Footermenu extends Component {
    render() {
        return (
            <Container>
                <footer>
                    <div className="footer"> {/*className="mt-auto py-3 col-xl-auto navbar-inverse  fixed-bottom"*/}
                        <div className="text-light bg-dark "> {/*className="text-light bg-dark "*/}
                            <div className="row justify-content-center">
                                {/* Quick Address Book*/}
                                <div className="col-sm text-muted">
                                    <div>
                                        <i className="fa fa-mobile-phone fa-2x"></i>
                                        <span text-muted>Phone: 0424585308</span>
                                    </div>
                                    <div>
                                        <i className="fa fa-paper-plane fa-2x"></i>
                                        <span>Email: poudelroman94@gmail.com</span>
                                    </div>
                                    <div>
                                        <i className="fa fa-map-marker fa-2x"></i>
                                        <span>1/8 Cowper Street, Parramtta</span>
                                    </div>
                                </div>
                                {/* Quick Menu*/}
                                <div className="col-sm text-muted">
                                    <Nav>
                                        <ul>
                                            <div>
                                                <li className="nav nav-item">
                                                    <i className="fa fa-home fa-2x">
                                                        <a href="/home" className="text-decoration-none text-muted" >Login</a>
                                                    </i>
                                                </li>
                                            </div>
                                            <div>
                                                <li className="nav nav-item">
                                                    <i className="fa fa-mobile fa-2x">
                                                        <a href="/contactme" className="text-decoration-none text-muted">Contact Me</a>
                                                    </i>
                                                </li>
                                            </div>
                                            <div>
                                                <li className="nav nav-item">
                                                    <i className="fa fa-laptop fa-2x">
                                                        <a href="/myskills" className="text-decoration-none text-muted">My Skills</a>
                                                    </i>
                                                </li>
                                            </div>
                                            <div>
                                                <li className="nav nav-item">
                                                    <i className="fa fa-code fa-2x">
                                                        <a href="/projects" className="text-decoration-none text-muted">Projects</a>
                                                    </i>
                                                </li>
                                            </div>
                                            <div>
                                                <li className="nav nav-item">
                                                    <i className="fa fa-book fa-2x">
                                                        <a href="/blogs" className="text-decoration-none text-muted">Blogs</a>
                                                    </i>
                                                </li>
                                            </div>
                                            <div>
                                                <li className="nav nav-item ">
                                                    <i className="fa fa-graduation-cap fa-2x">
                                                        <a href="/education" className="text-decoration-none text-muted">Education</a>
                                                    </i>
                                                </li>
                                            </div>
                                        </ul>
                                    </Nav>
                                </div>
                                {/* Social Links*/}
                                <div className="col-sm text-muted">
                                    <div>
                                        <a href="#" className="me-4 text-reset">
                                            <i className="fa fa-facebook fa-2x"></i>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" className="me-4 text-reset ">
                                            <i className="fa fa-linkedin fa-2x"></i>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" className="me-4 text-reset ">
                                            <i className="fa fa-github fa-2x"></i>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" className="me-4 text-reset ">
                                            <i className="fa fa-twitter fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-copyright text-center">© 2021 Copyright:
                                <a href="#" className="text-decoration-none" > iromanpoudel.com </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </Container>

        );
    }
}

export default Footermenu;
