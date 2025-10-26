import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m <b className="purple">Gaurav Sen</b>, a{" "}
              <b className="purple">Go-To-Market (GTM) Specialist</b> and{" "}
              <b className="purple">Data Analyst</b> who thrives on blending
              marketing strategy with data-driven insights to craft impactful,
              scalable solutions. I specialize in using tools like{" "}
              <b className="purple">Apollo, Smartlead, and Getsales</b> to
              strengthen outreach, optimize lead generation, and enhance the
              overall marketing performance of my organization.
              <br />
              <br />
              With expertise in{" "}
              <i>
                <b className="purple">Python, Power BI, and Microsoft Excel</b>
              </i>
              , I transform complex datasets into clear, actionable intelligence
              that supports smarter business decisions. My work centers on
              connecting strategy with analytics — turning data into meaningful
              stories that fuel growth.
              <br />
              <br />
              I’m passionate about developing systems and processes that bridge
              the gap between{" "}
              <i>
                <b className="purple">marketing, sales, and technology</b>
              </i>
              , ensuring every initiative is both measurable and marketable.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
