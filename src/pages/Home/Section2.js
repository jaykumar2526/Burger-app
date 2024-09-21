import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

function Section2() {

    // Mock Data Cards
    const mockData = [
        {
            image: Pizza,
            title: "Original",
            paragraph: ` We use only the freshest, highest-quality ingredients to ensure each bite delivers a unique and exceptional flavor. From premium meats to artisanal buns and locally-sourced produce. Taste the difference that genuine, expertly-selected ingredients make, and experience the true definition of originality in every delicious bite.`,
        },
        {
            image: Salad,
            title: "Qualty Foods",
            paragraph: `We are dedicated to serving only the highest quality food, ensuring every burger meets our rigorous standards. Our commitment to excellence shines through in every ingredient we select, from fresh produce to premium cuts of meat. Experience the superior taste and satisfaction that come with truly quality food.`,
        },
        {
            image: Delivery,
            title: "Fastest Delivery",
            paragraph: `At our service, speed and quality go hand in hand. We guarantee the fastest delivery, ensuring your burgers arrive piping hot and freshly made. Our efficient delivery team is dedicated to bringing you exceptional food quickly, so you can enjoy a top-notch meal without the wait. Order now to experience the perfect blend of fast service.`,
        },
        // Add more mock data objects as needed
    ];


    return <>
        <section className="about_section">
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }} className="text-center">
                        <h2>The burger tastes better when you eat it with your family
                        </h2>
                        <p>At Tasty Burger, we know that the joy of savoring a delicious burger is magnified when shared with family. Our menu is thoughtfully designed to offer something for everyone, making family meals unforgettable. Dive into our selection and turn every burger into a cherished moment with those you love.
                        </p>
                        <Link to="/" className="btn order_now btn_red">
                            Explore Full Menu
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="about_wrapper">
            <Container >
                <Row className="justify-content-md-center">
                    {mockData.map((cardData, index) => (
                        <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                            <div className="about-box">
                                <div className="about-icon text-center">
                                    <img
                                        src={cardData.image} className="img-fluid" alt="Icon"
                                    />
                                </div>
                                <h4 className="text-center">{cardData.title}</h4>
                                <p>{cardData.paragraph}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    </>
}
export default Section2;