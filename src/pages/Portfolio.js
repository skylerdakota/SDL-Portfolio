import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Header from "../components/Header";
import "./style.css";

function Portfolio() {
  return (
    <div>
      <Header>
      </Header>
        <Container>
          <Row />
          <Col />
          <Card>
            <Row>
              <Col>
              <Row>
                <Col size="md-3">
                  <Link
                    to="https://personality-pups.herokuapp.com//"
                    className={window.location.pathname === "https://personality-pups.herokuapp.com//"}
                    style={{color: "#6ea7d2"}}
                  >
                    Personality Pup
                  </Link>
                </Col>
                <Col size="md-3">
                  <Link
                    style={{color: "#6ea7d2"}}
                    href="https://github.com/oxfordblucher/Project-2-Untitled"
                  >
                    GitHub Repo
                  </Link>
                </Col>
              </Row>
                <img src="assets/images/personalitypupquiz.png" alt="Gentrification Sucks" className=".img-fluid. max-width: 100%; height: auto;"/>
              </Col>
              <Col>
              <Row>
                <Col size="md-3">
                  <Link
                    style={{color: "#6ea7d2"}}
                    href="https://skylerdakota.github.io/Eat-a-Burger/"
                  >
                    Eat-a-Burger
                    </Link>
                </Col>
                <Col size="md-3">
                  <Link
                  style={{color: "#6ea7d2"}} 
                  href="https://github.com/skylerdakota/Eat-a-Burger" 
                  >
                  GitHub Repo
                  </Link>
                </Col>
                </Row>
                <img src="assets/images/eataburger.png" alt="Eat-a-Burger"  className=".img-fluid. max-width: 100%; height: auto;"/>
              </Col>
              <Col>
              <Row>
                <Col size="md-3">
                  <Link
                  style={{color: "#6ea7d2"}} 
                  href="https://nicolas-tomlinsonstjuste.github.io/Gentrification-Sucks/"
                  >
                  Gentrification Sucks
                  </Link>
                </Col>
                <Col size="md-3">
                  <Link
                  style={{color: "#6ea7d2"}} 
                  href="https://github.com/nicolas-tomlinsonstjuste/Gentrification-Sucks" 
                  >
                  GitHub Repo 
                  </Link>
                </Col>
                </Row>
                <img src="assets/images/gentrificationsucks.png" alt="Gentrification Sucks"  className=".img-fluid. max-width: 100%; height: auto;"/>
              </Col>
              <Col>
              <Row>
                <Col size="md-3">
                  <Link
                  style={{color: "#6ea7d2"}} 
                  href="https://skylerdakota.github.io/Work-Day-Scheduler/" 
                  >
                  Workday Scheduler
                  </Link>
                </Col>
                <Col size="md-3">
                  <Link
                  style={{color: "#6ea7d2"}} 
                  href="https://github.com/skylerdakota/Work-Day-Scheduler" 
                  >
                  GitHub Repo</Link>
                </Col>
                </Row>
                <img src="assets/images/scheduler.png" alt="Workday Scheduler"  className=".img-fluid. max-width: 100%; height: auto;"/>
              </Col>
              <Col>
              <Row>
                <Col size="md-3">
                  <Link
                  style={{color: "#6ea7d2"}} 
                  href="https://skylerdakota.github.io/Password-Generator/" 
                  >
                  Password Generator
                  </Link>
                </Col>
                <Col size="md-3">
                  <Link
                  style={{color: "#6ea7d2"}} 
                  href="https://github.com/skylerdakota/Password-Generator" 
                  >
                  GitHub Repo</Link>
                </Col>
                </Row>
                <img src="assets/images/passwordgenerator.png" alt="Password Generator"  className=".img-fluid. max-width: 100%; height: auto;"/>
              </Col>
              <Col>
              <Row>
                <Col size="md-3">
                  <Link
                  style={{color: "#6ea7d2"}}
                  href="https://drive.google.com/file/d/1apEu5VemyZsXn0xMmWjGmszI2r7c1d-H/preview" 
                  >
                  Team Roster Generator
                  </Link>
                </Col>
                <Col size="md-3">
                  <Link
                  style={{color: "#6ea7d2"}} 
                  href="https://github.com/skylerdakota/Team-Roster-Generator" 
                  >
                  GitHub Repo
                  </Link>
                </Col>
                </Row>
                <img src="assets/images/teamroster.png" alt="Team Roster Generator"  className=".img-fluid. max-width: 100%; height: auto;"/>
              </Col>
            </Row>
          </Card>
        </Container>
    </div>
  );
}

export default Portfolio;
