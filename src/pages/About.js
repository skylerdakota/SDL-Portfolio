import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import "./style.css";

function About() {
   return (
    <div>
      <Container>
        <row />
        <col />
        <Card>
          <Row>
            <Col size="md-3">
              <Link href="https://www.linkedin.com/in/skyler-dakota-lawton/"
              style={{color: "#6ea7d2"}}>LinkedIn</Link>
            </Col>
            <Col size="md-3">
              <Link href="https://github.com/skylerdakota/"
              style={{color: "#6ea7d2"}}>GitHub</Link>
            </Col>
            <Col size="md-3">
              <Link href="./assets/Lawton Tech Resume.pdf"
              style={{color: "#6ea7d2"}}>Resumé</Link>
            </Col>
          </Row>
            <Row>
              <Col size="md-6" className="image">
                <img src="./assets/images/skyler.jpg" alt="Skyler Dakota" />
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
      </Container>
    </div>
  );
}

export default About;
