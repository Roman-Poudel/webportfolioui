import React, {Component} from 'react';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


class Footermenu extends Component {
    render() {
        return (
            <div className="FooterMenu">
                <Container>
                    <footer>
                        <div className="footer"> {/*className="mt-auto py-3 col-xl-auto navbar-inverse  fixed-bottom"*/}
                            <div className="text-light bg-dark "> {/*className="text-light bg-dark "*/}
                                <div className="row">
                                    {/* Quick Address Book*/}
                                    <div className="col col-4 text-muted footer-icon-bar">
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
                                    <div className="col col-5 footer-icon-bar">
                                            <a href="/home" className="text-muted me-4 " data-toggle ="tooltip"
                                               title="Home" >
                                                <i className="fa fa-home" aria-valuetext="Home"/>
                                            </a>
                                            <a href="/contactme" className="me-4 text-muted"
                                               data-toggle="tooltip" title="Contact Me">
                                                <i className="fa fa-mobile"/>
                                            </a>
                                            <a href="/myskills" className="me-4 text-muted" data-toggle="tooltip"
                                               title=" My Skills ">
                                                <i className="fa fa-laptop"/>
                                            </a>
                                            <a href="/projects" className="me-4 text-muted" data-toggle="tooltip"
                                               title="My Projects">
                                                <i className="fa fa-code"/>
                                            </a>
                                            <a href="/blogs" className="me-4 text-muted" data-toggle="tooltip"
                                               title="My Blogs">
                                                <i className="fa fa-book"/>
                                            </a>
                                            <a href="/education" className="me-4 text-muted" data-toggle="tooltip"
                                               title="Education">
                                                <i className="fa fa-graduation-cap"/>
                                            </a>
                                    </div>
                                    {/* Social Links*/}
                                    <div className="col col-3 text-muted footer-icon-bar">
                                        <a href="www.facebook.com/poudelrp94" className="me-4 text-reset">
                                            <i className="fa fa-facebook "></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/roman-poudel-36b78b167/" className="me-4 text-reset ">
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
