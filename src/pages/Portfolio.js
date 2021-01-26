import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function Portfolio() {
  return (
    <div>
      <Header>
        <Navbar>
        </Navbar>
      </Header>
      <Main>
        <Container>
          <Row />
          <Col />
          <Card>
            <Row>
              <Col>
                <Col size="md-3">
                  <Link
                    to="https://personality-pups.herokuapp.com//"
                    className={window.location.pathname === "https://personality-pups.herokuapp.com//"}
                  >
                    Personality Pup
                  </Link>
                </Col>
                <Col size="md-3">
                  <Link
                    style="color: #6ea7d2;"
                    href="https://github.com/oxfordblucher/Project-2-Untitled"
                  >
                    GitHub Repo
                  </Link>
                </Col>
                <img>src="assets/images/personalitypupquiz.png" alt="Gentrification Sucks" class=".img-fluid. max-width: 100%; height: auto;"</img>
              </Col>
              <Col>
                <Col size="md-3">
                  <Link
                    style="color: #6ea7d2;"
                    href="https://skylerdakota.github.io/Eat-a-Burger/"
                  >
                    Eat-a-Burger
                    </Link>
                </Col>
                <Col size="md-3">
                  <Link
                  style="color: #6ea7d2;" 
                  href="https://github.com/skylerdakota/Eat-a-Burger" 
                  >
                  GitHub Repo
                  </Link>
                </Col>
                <img>src="assets/images/eataburger.png" alt="Eat-a-Burger"  class=".img-fluid. max-width: 100%; height: auto;"</img>
              </Col>
              <Col>
                <Col size="md-3">
                  <Link
                  style="color: #6ea7d2;" 
                  href="https://nicolas-tomlinsonstjuste.github.io/Gentrification-Sucks/"
                  >
                  Gentrification Sucks
                  </Link>
                </Col>
                <Col size="md-3">
                  <Link>style="color: #6ea7d2;" href="https://github.com/nicolas-tomlinsonstjuste/Gentrification-Sucks" GitHub Repo</Link>
                </Col>
                <img>src="assets/images/gentrificationsucks.png" alt="Gentrification Sucks"  class=".img-fluid. max-width: 100%; height: auto;"</img>
              </Col>
              <Col>
                <Col size="md-3">
                  <Link
                  style="color: #6ea7d2;" 
                  href="https://skylerdakota.github.io/Work-Day-Scheduler/" 
                  >
                  Workday Scheduler
                  </Link>
                </Col>
                <Col size="md-3">
                  <Link
                  style="color: #6ea7d2;" 
                  href="https://github.com/skylerdakota/Work-Day-Scheduler" 
                  >
                  GitHub Repo</Link>
                </Col>
                <img>src="assets/images/scheduler.png" alt="Workday Scheduler"  class=".img-fluid. max-width: 100%; height: auto;"</img>
              </Col>
              <Col>
                <Col size="md-3">
                  <Link
                  style="color: #6ea7d2;" 
                  href="https://skylerdakota.github.io/Password-Generator/" 
                  >
                  Password Generator
                  </Link>
                </Col>
                <Col size="md-3">
                  <Link
                  style="color: #6ea7d2;" 
                  href="https://github.com/skylerdakota/Password-Generator" 
                  >
                  GitHub Repo</Link>
                </Col>
                <img>src="assets/images/passwordgenerator.png" alt="Password Generator"  class=".img-fluid. max-width: 100%; height: auto;"</img>
              </Col>
              <Col>
                <Col size="md-3">
                  <Link
                  style="color: #6ea7d2;" 
                  href="https://skylerdakota.github.io/Password-Generator/" 
                  >
                  Password Generator
                  </Link>
                </Col>
                <Col size="md-3">
                  <Link
                  style="color: #6ea7d2;" 
                  href="https://github.com/skylerdakota/Work-Day-Scheduler" 
                  >
                  GitHub Repo
                  </Link>
                </Col>
                <img>src="assets/images/eataburger.png" alt="Workday Scheduler"  class=".img-fluid. max-width: 100%; height: auto;"</img>
              </Col>
            </Row>
          </Card>
        </Container>
      </Main>
      <Footer>
      </Footer>
    </div>
  );
}

export default Portfolio;
