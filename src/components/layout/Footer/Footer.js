import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faMailchimp,
  faStumbleuponCircle,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h4>Get in Touch</h4>
            <ul className="contact-list">
              <li>
                <FontAwesomeIcon icon={faMailchimp} />
                <a href="mailto:ahmed.mohamed.abdelkader1@gmail.com">
                  ahmed.mohamed.abdelkader1@gmail.com
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faStumbleuponCircle} />
                <a href="tel:+201013778108">+20(1013778108)</a>
              </li>
            </ul>
          </Col>
          <Col
            className="contact-me d-flex flex-column align-items-center"
            xs={12}
            md={4}>
            <h4>Contact Me</h4>
            <Button
              variant="primary"
              href="mailto:ahmed.mohamed.abdelkader1@gmail.com">
              <FontAwesomeIcon icon={faMailchimp} /> Email Me
            </Button>
          </Col>
          <Col xs={12} md={4}>
            <h4>Follow Me</h4>
            <ul className="social-media-list">
              <li>
                <a href="https://www.facebook.com/ahmedketa123/">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://github.com/AhmedKeta">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ahmed-abd-el-kader/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
            <p>&copy; 2023 Keta.com. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
