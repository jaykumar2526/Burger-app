import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromoteImg from "../../assets/promotion/pro.png"

function Section4() {
    return <>
        <section className="promote_section">
            <Container>
                <Row className="align-item-center">
                    <Col lg={6} className="text-center mb-5 mb-lg-0">
                        <img src={PromoteImg} className="img-fluid" alt="promoteImage" />
                    </Col>
                    <Col lg={6} className="px-5">
                        <h2>Nothing brings people together like a good burger</h2>
                        <p>A great burger is more than just food—it’s an experience that brings people closer. Our mouthwatering burgers are crafted to be shared, making every meal a special occasion. Whether it's a family dinner or a casual get-together with friends, our burgers create memorable moments and foster connections. Gather around, savor the flavors, and let each bite turn into a cherished experience with those who matter most.
                        </p>
                        <ul>
                            <li><p>Our burgers create opportunities for shared meals and meaningful connections with loved ones, making each dining experience memorable.</p>
                            </li>
                            <li><p>Each bite turns an ordinary meal into a cherished experience, adding joy and camaraderie to every moment spent together.</p>
                            </li>
                            <li><p>Flavorful creations are crafted to elevate every gathering and bring people closer, enhancing your time with those who matter most.</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
        
        {/* {paralax scroll background } */}
        <section className="bg_parallax_scroll"/>
    </>
}

export default Section4;