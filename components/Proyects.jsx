import React from "react";
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IconBrandGithub, IconWorld, IconBrandReact, IconBrandJavascript, IconBrandCss3, IconBrandNodejs } from "@tabler/icons-react";
import './projects.css';

const iconMap = {
  'react': <IconBrandReact />,
  'javascript': <IconBrandJavascript />,
  'css': <IconBrandCss3 />,
  'nodejs': <IconBrandNodejs />,
};
  
export default function Projects() {
  const projectsArray = [
    {
      nombre: "PaisajistApp",
      descripcion: "Página web de paisajismo enfocada en jardínes.",
      imagenPortada: "./Screenshot 2024-10-23 at 18-51-22 PaisajistApp.png",
      link: 'https://paisajist-app.vercel.app/',
      tecnologiasUsadas: ['react', 'javascript', 'css'],
      linkGithub: "https://github.com/juancruz12345/PaisajistApp"
    },
    {
      nombre: "Tv Online",
      descripcion: "Página web para ver tv online gratis",
      imagenPortada: "./Screenshot 2024-09-16 at 19-06-25 TV Online.png",
      link: 'https://tv-online-z08i.onrender.com/',
      tecnologiasUsadas: ['react', 'javascript', 'css'],
      linkGithub: "https://github.com/juancruz12345/TV-Online"
    },
    {
      nombre: "Vivero online",
      descripcion: "E-commerce con autenticación de usuario y pasarela de pago integrada(Mercado Pago). Desarrolle y desplegue tanto el frontend como el backend",
      imagenPortada: "./Screenshot 2024-11-02 at 14-40-36 Vivero Online.png",
      tecnologiasUsadas: ['react', 'javascript', 'nodejs'],
      linkGithub: "https://github.com/juancruz12345/Vivero-La-Jardineta"
    },
    {
      nombre: "Drawing App",
      descripcion: "Web app para dibujar similar a paint",
      imagenPortada: "./drawingapp.png",
      tecnologiasUsadas: ['react', 'javascript', 'css'],
      linkGithub: "https://github.com/juancruz12345/Drawing-App"
    },
    {
      nombre: "Chat online",
      descripcion: "Aplicación de chat online utilizando socket.io",
      imagenPortada: "./chat.png",
      tecnologiasUsadas: ['react', 'nodejs', 'javascript'],
      linkGithub: "https://github.com/juancruz12345/Chat"
    },
    {
      nombre: "Tetris",
      descripcion: "Juego de tetris desarrollado con vanilla JS",
      imagenPortada: "./Screenshot 2024-11-02 at 14-13-49 Tetris.png",
      tecnologiasUsadas: ['javascript', 'css'],
      linkGithub: "https://github.com/juancruz12345/Tetris-JS"
    },
    {
      nombre: "TODO-App",
      descripcion: "Aplicacion de lista de tareas",
      imagenPortada: "./todo.png",
      tecnologiasUsadas: ['react', 'javascript'],
      linkGithub: "https://github.com/juancruz12345/TODO-app"
    }
  ];

  return (
    <Container fluid className="projects-section">
      <h3 className="section-title">Proyectos</h3>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projectsArray.map((project, index) => (
          <Col key={index}>
            <Card className="h-100 project-card">
              <div className="card-img-wrapper">
                <Card.Img variant="top" src={project.imagenPortada} alt={project.nombre} />
                <div className="tech-overlay">
                  {project.tecnologiasUsadas.map((tech, i) => (
                    <Badge key={i} bg="light" text="dark" className="tech-badge">
                      {iconMap[tech]}
                      <span className="tech-name">{tech}</span>
                    </Badge>
                  ))}
                </div>
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.nombre}</Card.Title>
                <Card.Text>{project.descripcion}</Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <Link to={project.linkGithub} className="btn btn-outline-primary btn-sm" aria-label={`Ver código de ${project.nombre} en GitHub`}>
                    <IconBrandGithub /> GitHub
                  </Link>
                  {project.link && (
                    <Link to={project.link} className="btn btn-primary btn-sm" aria-label={`Ver proyecto ${project.nombre} en vivo`}>
                      <IconWorld /> Ver Proyecto
                    </Link>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

