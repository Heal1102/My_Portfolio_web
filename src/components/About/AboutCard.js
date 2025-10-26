import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Gaurav Sen</span>{" "}
            from <span className="purple">Maihar, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">GTM Specialist</span> at{" "}
            <span className="purple">CloudNuro</span>.
            <br />I hold a Bachelor of Technology{" "}
            <span className="purple">in Computer Science and Engineering</span> from{" "}
            <span className="purple">SIRT, Bhopal</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar 🎸
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Financed and Operations Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learn things, provide solutions, conquer market"{" "}
          </p>
          <footer className="blockquote-footer">Gaurav Sen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
