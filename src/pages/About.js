import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Header from "../components/Header";
import "./style.css";

function About() {
   return (
    <div>
      <Container>
        <Row>
        <Col>
        <Card>
          <Header style={{color: "#6ea7d2"}}>
            <h3>About</h3>
          </Header>
          <Row>
            <Col size="md-3">
              <a href="https://www.linkedin.com/in/skyler-dakota-lawton/"
              target="_blank"
              style={{color: "#6ea7d2"}}>LinkedIn</a>
            </Col>
            <Col size="md-3">
              <a href="https://github.com/skylerdakota/"
              target="_blank"
              style={{color: "#6ea7d2"}}>GitHub</a>
            </Col>
            <Col size="md-3">
              <a href="./assets/Lawton Tech Resume.pdf"
              target="_blank"
              style={{color: "#6ea7d2"}}>Resumé</a>
            </Col>
          </Row>
            <Row>
              <Col size="md-6">
                <img src="./assets/images/skyler.jpg" alt="Skyler Dakota"  className="image"/>
              </Col>
            </Row>
            <Row>
              <Col size="md-6">
                <p>
                  In search of a new challenge, in a field with high impact, Skyler leaves the hospitality industry where they served
                  as the Director of Operations for a start up beverage company. Inspired by the creative thinking and collaborative work
                  required of building a company from the ground up, Skyler aims to translate these skills into the tech industry.
                  </p>
              </Col>
            </Row>
        </Card>
        </Col>
       </Row>
      </Container>
    </div>
  );
}

export default About;
