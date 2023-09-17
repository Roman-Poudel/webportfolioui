import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './FooterMenu.css'; // Import your CSS styles for the footer menu here

function FooterMenu() {
    return (
        <div className="FooterMenu">
            <footer>
                <div className="footer">
                    <div className="text-light bg-dark">
                        <Container>
                            <Row>
                                {/* Quick Address Book */}
                                <Col xs={12} md={4} className="text-muted footer-icon-bar">
                                    <div>
                                        <i className="fa fa-mobile-phone"></i>
                                        <span>Phone: 0424585308</span>
                                    </div>
                                    <div>
                                        <i className="fa fa-paper-plane"></i>
                                        <span>Email: poudelroman94@gmail.com</span>
                                    </div>
                                    <div>
                                        <i className="fa fa-map-marker"></i>
                                        <span>1/8 Cowper Street, Parramatta</span>
                                    </div>
                                </Col>

                                {/* Quick Menu */}
                                <Col xs={12} md={4} className="footer-icon-bar text-center">
                                    <NavLink to="/home" className="text-muted me-4" data-toggle="tooltip" title="Home">
                                        <i className="fa fa-home" aria-valuetext="Home"></i>
                                    </NavLink>
                                    <NavLink to="/contactme" className="me-4 text-muted" data-toggle="tooltip" title="Contact Me">
                                        <i className="fa fa-mobile"></i>
                                    </NavLink>
                                    {/* Add the rest of your Quick Menu links */}
                                </Col>

                                {/* Social Links */}
                                <Col xs={12} md={4} className="text-muted footer-icon-bar text-center">
                                    <a href="https://www.facebook.com/poudelrp94" className="me-4 text-reset">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/roman-poudel-36b78b167/" className="me-4 text-reset">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    {/* Add the rest of your social links */}
                                </Col>
                            </Row>
                            <div className="footer-copyright text-center mt-3">
                                © 2021 Copyright:
                                <a href="#" className="text-decoration-none"> iromanpoudel.com </a>
                            </div>
                        </Container>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default FooterMenu;
