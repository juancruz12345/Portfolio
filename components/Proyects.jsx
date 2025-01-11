import  { useState, useContext } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IconBrandGithub, IconWorld, IconBrandReact, IconBrandJavascript, IconBrandCss3, IconBrandNodejs, IconBrandTypescript, IconBrandBootstrap, IconX } from "@tabler/icons-react";
import './projects.css';
import { ProyectsArray } from '../proyects.js';
import { ThemeContext } from '../context/context.jsx';

const iconMap = {
  'react': <IconBrandReact />,
  'javascript': <IconBrandJavascript />,
  'css': <IconBrandCss3 />,
  'node': <IconBrandNodejs />,
  'typescript' : <IconBrandTypescript/>,
  'bootstrap' : <IconBrandBootstrap/>
};

export default function Projects() {
  const { projectsArray } = ProyectsArray();
  const [selectedProject, setSelectedProject] = useState(null);
  const {theme} = useContext(ThemeContext)

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  const renderProjectCard = (project) => (
    <Card className="h-100 project-card" onClick={() => handleViewDetails(project)}>
      
      <div className="card-img-wrapper">
        <Card.Img variant="top" src={project.imagenPortada} alt={project.nombre} />
        <div className="hover-overlay">
        <div className="tech-overlay">
          {project.tecnologiasUsadas.map((tech, i) => (
            <Badge 
            key={i} 
            className="tech-badge" 
            bg={theme==='dark' ? 'light' : 'dark'}
            text={theme==='dark' ? 'dark' : 'light'}
            >
              {iconMap[tech]}
              <span className="tech-name">{tech}</span>
            </Badge>
          ))}
        </div>
          <p>Click para más detalles</p>
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
  );

  const renderDetailedProject = (project) => (
    <div className="detailed-project">
      <div className="detailed-card">
        <div className="card-img-wrapper">
          <img src={project.imagenPortada} alt={project.nombre} className="detailed-img" />
          <div className='tech-div'>
            <h4>Tecnologías utilizadas</h4>
          <div className="tech-overlay">
           
           {project.tecnologiasUsadas.map((tech, i) => (
             <Badge key={i} className="tech-badge" bg={theme==='dark' ? 'light' : 'dark'}
             text={theme==='dark' ? 'dark' : 'light'}>
               {iconMap[tech]}
               <span className="tech-name">{tech}</span>
             </Badge>
           ))}
         </div>
          </div>
        </div>
        <div className="detailed-content">
          <h2>{project.nombre}</h2>
          <p>{project.descripcion}</p>
          <div className="detailed-buttons">
            <Link to={project.linkGithub} className="btn btn-outline-primary" aria-label={`Ver código de ${project.nombre} en GitHub`}>
              <IconBrandGithub /> GitHub
            </Link>
            {project.link && (
              <Link to={project.link} className="btn btn-primary" aria-label={`Ver proyecto ${project.nombre} en vivo`}>
                <IconWorld /> Ver Proyecto
              </Link>
            )}
            <Button variant="secondary" onClick={handleCloseDetails}>
              <IconX /> Cerrar detalles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Container fluid className="projects-section">
      <h3 className="section-title">Proyectos</h3>
      {selectedProject ? (
        renderDetailedProject(selectedProject)
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {projectsArray.map((project, index) => (
            <Col key={index}>
              {renderProjectCard(project)}
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

