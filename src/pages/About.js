import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function About() {
  return (
    <div>
      <Header>
        <Navbar/>
      </Header>
        <Container>
          <Row/>
          <Col/>
          <Card>
            <Row>
              <Col size="md-3">
                <Link href="https://www.linkedin.com/in/skyler-dakota-lawton/">LinkedIn</Link>
              </Col>
              <Col size="md-3">
                <Link href="https://github.com/skylerdakota/">GitHub</Link>
              </Col>
              <Col size="md-3">
                <Link href="assets/LawtonTechResume.pdf">Resumé</Link>
              </Col>
              <Col size="md-6">
              <img src="assets/images/skyler.jpg" alt="Skyler Dakota"/>
              </Col>
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
      <Footer/>
    </div>
  );
}

export default About;
