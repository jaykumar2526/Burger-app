import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import User1 from "../../assets/blog/image1.jpg";
import User2 from "../../assets/blog/image2.jpg";
import User3 from "../../assets/blog/image3.jpg";
import User5 from "../../assets/blog/image5.png";

function Section6() {
    return <>
        <section className="blog_section">
            <Container>
                <Row>
                    <Carousel >
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User1} className="img-fluid" alt="user-1" />
                                </div>
                                <p> "Dining at this place was fantastic! The burger was juicy and packed with flavor, and the warm atmosphere made it even better. It was the perfect spot for our family gathering!"
                                </p>
                                <div className="item_rating mb-2">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <h5>BY  Ryan & Ava</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User2} className="img-fluid" alt="user-2" />
                                </div>
                                <p>"I brought my friends here for a casual get-together, and we were blown away. The burgers were inventive and delicious, and the service was top-notch. We’re already planning our next visit!"
                                </p>
                                <div className="item_rating mb-2">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <h5>BY Michael Johnson</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User5} className="img-fluid" alt="user-5" />
                                </div>
                                <p> "I had an amazing time here with my family. The burgers were not only tasty but also brought us all together for a great meal. Highly recommend for anyone looking for a memorable dining experience!"
                                </p>
                                <div className="item_rating mb-2">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <h5>BY AYISHA</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User3} className="img-fluid" alt="user-3" />
                                </div>
                                <p>"The experience exceeded my expectations. The burger was cooked to perfection, and the friendly staff made us feel right at home. It’s now my go-to spot for any special occasion."
                                </p>
                                <div className="item_rating mb-2">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <h5>BY AMELIE NEWLOVE</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </section>
    </>
}

export default Section6;