import React from "react";
import { Container,Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom";

function Section7() {
    return <>
        <section className="contact_section">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={8} className="text-center" >
                        <h4>We Guarantee</h4>
                        <h2>30 Minutes Delivery!</h2>
                        <p>We promise to deliver your favorite burger, fresh and hot, within 30 minutes! Fast, delicious, and always on time—because your hunger can't wait!</p>
                            <Link to={"/"} className="btn btn_red px-4 py-2 rounded-0">
                            Call: 999-888-777
                            </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
}

export default Section7;