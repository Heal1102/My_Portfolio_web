import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import HaskellIcon from "../../Assets/TechIcons/Haskell.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
import Django from "../../Assets/TechIcons/django.svg";
import Flask from "../../Assets/TechIcons/flask.svg";
import Seaborn from "../../Assets/TechIcons/seaborn-1.svg";
import PowerBI from "../../Assets/TechIcons/power-bi.svg";
import Excel from "../../Assets/TechIcons/excel-4.svg";
import Pandas from "../../Assets/TechIcons/pandas.svg";
import Anaconda from "../../Assets/TechIcons/anaconda-1.svg";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Pandas} alt="Pandas" className="tech-icon-images" />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Flask} alt="Flask" className="tech-icon-images" />
        <div className="tech-icons-text">Flask</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Anaconda} alt="Anaconda" className="tech-icon-images" />
        <div className="tech-icons-text">Anaconda</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Seaborn} alt="Seaborn" className="tech-icon-images" />
        <div className="tech-icons-text">Seaborn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PowerBI} alt="PowerBI" className="tech-icon-images" />
        <div className="tech-icons-text">PowerBI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Excel} alt="Excel" className="tech-icon-images" />
        <div className="tech-icons-text">Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
    </Row>
  );
}

export default Techstack;
