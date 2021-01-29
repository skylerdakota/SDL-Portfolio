import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
// import Form from "../components/Form";
import Footer from "../components/Footer"

function Contact() {
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
                <p className="col s3" style="color: #6ea7d2;">skylerdakota@gmail.com</p>               
              </Col>
              <Col size="md-3">
                <p className="col s3" style="color: #6ea7d2;">914-330-3029</p>
              </Col>
            </Row>
            {/* <Form>
              <Row size="m-3">
                <Col>
                    <p><small className="card-text">First Name</small></p>
                    <input> type="text" className="form-control" placeholder="First name"</input>
                </Col>
                <Col>
                    <p><small className="card-text">Last Name</small></p>
                    <input> type="text" className="form-control" placeholder="Last name"</input>
                </Col>
              </Row>
              <Row size="m-3">
                <Col>
                    <p><small className="card-text">Email</small></p>
                    <input> type="text" className="form-control" placeholder="Email"</input>
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
                  href="#" 
                  className="btn" 
                  style="background-color: #aac9e0;" 
                  >
                  Submit
                  </Link>
                </Col>
              </Row>
            </Form> */}
          </Card>
        </Container>
      <Footer/>
    </div>
  );
}

export default Contact;