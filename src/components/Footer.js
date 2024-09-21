import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    const [isVisibal, setIsVisible] = useState(false);
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const listenToScroll = () => {
        let heightToHidden = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
    })

    return <>
        <footer>
            <Container>
                <Row>
                    <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                        <div className="text-center">
                            <h5>Location</h5>
                            <p>Tasty Burger</p>
                            <p>Mohania, 821109</p>
                            <p>India</p>

                        </div>
                    </Col>
                    <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                        <div className="text-center">
                            <h5>Working Hours</h5>
                            <p>Monday - Saturday</p>
                            <p>10:00 AM - 8:00 PM</p>
                            <p>Sunday: 12:00 AM - 9:00 PM</p>
                        </div>
                    </Col>
                    <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                        <div className="text-center">
                            <h5>Order Now</h5>
                            <p>Place your orders by contacting us at</p>
                            <p><Link to="tel:999888777" className="calling">0999-888-777</Link></p>
                        </div>
                    </Col>
                    <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                        <div className="text-center">
                            <h5>Follow Us</h5>
                            <p>On Social Plateform</p>
                            <ul className="list-unstyled text-center mt-2">
                                <li>
                                    <Link to={"https://www.linkedin.com/in/jay-kumar-9bbba125b/"} >
                                        <i className="bi bi-linkedin"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"https://github.com/jaykumar2526"} >
                                        <i className="bi bi-github"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"https://www.instagram.com/jaykumar2526/"} >
                                        <i className="bi bi-instagram"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="copy_right">
                    <Col>
                        <div>
                            <ul className="list-unstyled text-center mb-0">
                                <li>
                                    <Link to={"/"} >
                                        <i class="bi bi-c-circle"></i> 2024 <span>JAYKUMAR'S SITE </span>. All Rights Reserved
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/"} >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/"} >
                                        Terms Of Use
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/"} >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        {/* scroll top arrow  */}
        {isVisibal && (<div className="scroll_top" onClick={scrollTop}>
            <i className="bi bi-arrow-up"></i>
        </div>)}

    </>
}
export default Footer;