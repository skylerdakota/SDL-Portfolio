import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Header from "../components/Header";
import Form from "../components/Form";
import "./style.css";

function Contact() {
  return (
    <div>
        <Container>
          <Row/>
          <Col/>
          <Card>
          <Header style={{color: "#6ea7d2"}}>
            <h3>Contact</h3>
          </Header>
            <Row>
              <Col size="md-3">
                <p className="col s3">skylerdakota@gmail.com</p>               
              </Col>
              <Col size="md-3">
                <p className="col s3">914-330-3029</p>
              </Col>
            </Row>
            <Form>
              <Row size="m-3">
                <Col>
                    <p><small className="card-text">First Name</small></p>
                    <input type="text" className="form-control" placeholder="First name"/>
                </Col>
                <Col>
                    <p><small className="card-text">Last Name</small></p>
                    <input type="text" className="form-control" placeholder="Last name"/>
                </Col>
              </Row>
              <Row size="m-3">
                <Col>
                    <p><small className="card-text">Email</small></p>
                    <input type="text" className="form-control" placeholder="Email"/>
                </Col>
              </Row>
              <Row size="m-3">
                <Col>
                  <label><small className="exampleFormControlTextarea1">Message</small></label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                    placeholder="Message"></textarea>
                </Col>
              </Row>
              <Row size="m-3">
                <Col>
                  <Link
                  to="#" 
                  className="btn" 
                  style={{color: "#aac9e0"}} 
                  >
                  Submit
                  </Link>
                </Col>
              </Row>
            </Form>
          </Card>
        </Container>
    </div>
  );
}

export default Contact;