import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Apollo from "../../Assets/TechIcons/idNuu8-PhF_1761474733587.jpeg";
import Windows from "../../Assets/TechIcons/windows-3.svg";
import GetSales from "../../Assets/TechIcons/getSales.svg";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Windows} alt="Windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows 11</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Apollo} alt="Apollo" className="tech-icon-images" />
        <div className="tech-icons-text">Apollo</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={GetSales} alt="GetSales" className="tech-icon-images" />
        <div className="tech-icons-text">GetSales</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
