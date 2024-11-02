
import { Container, Row, Col, Image} from 'react-bootstrap'
import './about.css'
import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconCircleFilled } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export default function AboutMe(){


    return(
        
<Container fluid='md' className='container'>
   

  <Row className='rowContainer'>
     
  <Col className="firstColumn" md={5}>
   
   <div className='firstColumnChild'>
    <Image roundedCircle loading='lazy' className='profileImg' src='./img-me-Photoroom(1).png' ></Image>
   </div>
   <h4>Juan Cruz Urban</h4>
   <p>Soy un programador web fullstack que vive en Argentina</p>

   <div className='icons-list-about'>
    
     <Link className='link-about' to={'https://github.com/juancruz12345'}>
            <IconBrandGithub className='icon-about' ></IconBrandGithub>
            
     </Link>
     
     <Link className='link-about' to={'https://www.linkedin.com/in/juan-cruz-urban-1b1907266/'}>
            <IconBrandLinkedin className='icon-about'></IconBrandLinkedin>
           
            </Link>
    
   </div>
   <div className='div-invisible'>


   </div>
  </Col>

  <Col className="secondColumn" md={5}>

      <div>
      
      <p>
      ¡Hola! Soy un developer con experiencia en frontend (React, JavaScript) 
      y backend (Node.js, Express). Me especializo en integración de APIs, 
      bases de datos (SQL, NoSQL) y soluciones de e-commerce, 
      con capacidad para gestionar todo el ciclo de desarrollo de aplicaciones web.
      Me motiva el hecho de poder crear aplicaciones que ayuden a los demás.
      </p>
      <div className='circle'>
        <IconCircleFilled></IconCircleFilled>
        <span>Disponible para trabajar</span>
      </div>
     
      </div>
 
   
   </Col>
   
  
  </Row>

 </Container>
    
)
}