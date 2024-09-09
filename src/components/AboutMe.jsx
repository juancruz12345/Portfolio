
import { Container, Row, Col, Image} from 'react-bootstrap'
import { IconBulb } from '@tabler/icons-react';
import {Link} from 'react-router-dom'

export default function AboutMe(){


    return(
        
<Container fluid='md' className='container'>
    
    <Row className='firstRow'>
      <div className='firstDiv'>
      <h2>¿Tenés una idea?</h2>
     
      <h3>¡Desarróllemosla!</h3>
      <br/>
      <div className='lampDiv'>
      
          
           <IconBulb className='lamp'></IconBulb>
           <IconBulb className='lamp2'></IconBulb>
           
       
     
      
      
      </div>
      <br/>
      <p>Puedo crear tu propia página web, app o juego </p>
      
      </div>
    

    </Row>
  
  <Row className='rowContainer' id='about'>
  <h3>Sobre mi...</h3>
  <Col className="firstColumn">
  
  
      <div>
      <h4>Juan Cruz Urban</h4>
      <p className='description'>
      Soy un programador con conocimientos tanto en el <strong>frontend </strong> 
      como en el <strong>backend</strong> del desarrollo de paginas y aplicaciones web.
      Tambien poseo conocimientos sobre desarrollo de videojuegos en unity. 
      Me apasiona programar y me motiva el hecho de crear aplicaciones que sean utiles para otras personas.
      </p>
      <p>
      Busco poder desarrollar mis habilidades en un entorno profesional 
      para poder crecer como programador.<span><strong>_</strong></span>
      </p>
     
      </div>
 
   
   </Col>
   

   <Col className="secondColumn">
   
   <div className='secondColumnChild'>
    <Image roundedCircle loading='lazy' className='profileImg' src='public\img-me.jpg' ></Image>
   <div className='links'>
    
    <Link className='link' to={'https://github.com/juancruz12345'}><Image  className='githubIcon' loading='lazy' src='public\icons\githubwhite.svg'></Image></Link>
    </div>
   
   </div>
  </Col>
  </Row>

 </Container>
    
)
}