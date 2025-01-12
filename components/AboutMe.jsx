
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { IconBrandGithub, IconBrandLinkedin, IconCircleFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import './about.css';

export default function AboutMe() {
  return (
    <Container fluid="md" className="about-container">
      <Row className="justify-content-center align-items-center">
        <Col md={5} className="text-center mb-4 mb-md-0">
          <Image
            roundedCircle
            fluid
            className="profile-img shadow"
            src="./img-me-Photoroom(1).png"
            alt="Juan Cruz Urban"
            loading='lazy'
          />
          <h2 className="mt-3 mb-2">Juan Cruz Urban</h2>
          <p className="text-muted">Programador Web Fullstack | Argentina</p>
          <div className="social-icons mt-3">
            <Link to="https://github.com/juancruz12345" className="me-3">
              <IconBrandGithub size={24} />
            </Link>
            <Link to="https://www.linkedin.com/in/juan-cruz-urban-1b1907266/">
              <IconBrandLinkedin size={24} />
            </Link>
          </div>
        </Col>
        <Col md={7}>
          <div className="about-content p-4 bg-light rounded shadow-sm" id='about-card'>
            <p className="lead">
              ¡Hola! Soy un developer con experiencia en frontend (React, JavaScript) 
              y backend (Node.js, Express). Me especializo en integración de APIs, 
              bases de datos (SQL, NoSQL) y soluciones de e-commerce, 
              con capacidad para gestionar todo el ciclo de desarrollo de aplicaciones web.
            </p>
            <p>
              Me motiva el hecho de poder crear aplicaciones que ayuden a los demás.
            </p>
            <div className="availability mt-3">
              <IconCircleFilled size={16} className="text-success me-2" />
              <span>Disponible para trabajar</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

