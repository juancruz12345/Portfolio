
import { Badge, Accordion, Col, Row, Container } from "react-bootstrap";
import iconsArray from "../src/iconsArray";
import './abilities.css';

export default function Abilities() {
  const { icons } = iconsArray();

  const skillLevels = {
    3: { text: "Avanzado", color: "success" },
    2: { text: "Medio", color: "warning" },
    1: { text: "Básico", color: "info" }
  }
  const imgsCertificates = ['./certificados/1-Introducción a la Programación.jpeg','./certificados/2-Backend 1 Introducción a Java.jpeg','./certificados/1694701532215-05094ac3-28fc-437b-b7d8-54f154d481d3_1.jpg']

  return (
    <Container className="abilities-container">
      <Row>
        <Col lg={8} className="skills-col">
          <h3 className="section-title">Habilidades aprendidas</h3>
          <div className="skills-grid">
            {icons.map((icon, i) => (
              <div key={i} className="skill-card">
                <img className="skill-icon" src={icon.url} alt={icon.name} />
                <Badge bg={skillLevels[icon.nivel].color} className="skill-badge">
                  {icon.name}
                </Badge>
                <span className="skill-level">{skillLevels[icon.nivel].text}</span>
              </div>
            ))}
          </div>
        </Col>
        <Col lg={4} className="certificates-col">
          <h3 className="section-title">Certificados</h3>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Egg Cooperation</Accordion.Header>
              <Accordion.Body>
                {['Introducción a la programación', 'Introducción a Java', 'Base de datos + Frontend'].map((cert, index) => (
                  <div key={index} className="certificate-item">
                    <a href={`#imgModal-${index + 1}`} className="certificate-link">
                      <span>{cert}</span>
                    </a>
                    <div id={`imgModal-${index + 1}`} className="modal">
                      <a href="#abilities" className="close">&times;</a>
                      <img src={imgsCertificates[index]} alt={cert} />
                    </div>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

