import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png"
import { Link } from "react-router-dom";

function Section1() {
    return <>
        <section className="hero_section">
            <Container>
                <Row >
                    <Col lg={7} className="mb-5 mb-lg-0">
                        <div className="position-relative">
                            <img src={Burger} className="img-fluid" alt="Hero-image" />
                            <div className="price_badge">
                                <div className="badge_text">
                                    <h4 className="h4_xs">Only</h4>
                                    <h4 className="h3_lg"><i class="bi bi-currency-rupee"></i>92.3</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="hero_text text-center">
                            <h1 className="text-white">New Burger</h1>
                            <h2 className="text-white">With Onion</h2>
                            <p className="text-white pb-4 pt-2">This mouthwatering addition features a perfectly seasoned patty topped with caramelized onions for a rich, savory flavor. Experience a new level of deliciousness with every bite—try it today and discover your new favorite!
                            </p>
                            <Link to={"/"} className="btn order_now">Oredr Now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
}
export default Section1;