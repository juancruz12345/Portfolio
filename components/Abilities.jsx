import { Badge, Accordion, Col } from "react-bootstrap"
import iconsArray from "../src/iconsArray"
import {IconCircleFilled,IconCircle } from "@tabler/icons-react"
import './abilities.css'

export default function Abilities(){

    const {icons} = iconsArray()

  
    return(
  <div>
       
    
    <div className="habilidades-certificados-div">


    <Col className="habilidades-col" md={5} sm={12}>
    <div className="div-title"><h3>Habilidades aprendidas</h3></div>
     
     <div className="habilidades">
    
     {
        icons.map((icon, i)=>(
         
          <div key={i} className="habilidad">
            
           <Badge  id='badge' className="badge"><span>{icon.name}</span></Badge>
            <div className="nivel">
              {
                icon.nivel == 3
                ?
                <div>
                <div className="icon-nivel-list">
                  <IconCircleFilled className="icon-nivel"></IconCircleFilled>
                  <IconCircleFilled className="icon-nivel"></IconCircleFilled>
                  <IconCircleFilled className="icon-nivel"></IconCircleFilled>
                 
                </div>
                <div className="habilidad-nivel">Avanzado</div>
                </div>
                : icon.nivel == 2
                ? <div >
                  <div className="icon-nivel-list">
                  <IconCircleFilled className="icon-nivel"></IconCircleFilled>
                  <IconCircleFilled className="icon-nivel"></IconCircleFilled>
                  <IconCircle className="icon-nivel"></IconCircle>
                  </div>
                  <div className="habilidad-nivel">Medio</div>
                </div>
                : <div >
                 
                 <div className="icon-nivel-list">
                 <IconCircleFilled className="icon-nivel-filled"></IconCircleFilled>
                  <IconCircle className="icon-nivel"></IconCircle>
                  <IconCircle className="icon-nivel"></IconCircle>
                 </div>
                  
                  <div className="habilidad-nivel">Básico</div>
                </div>
              }
            </div>
            
            
          </div>
        
        )
        )
        
      }
     </div>
    </Col>

     <Col className="certificados-col" md={5} sm={12}>
      <h3>Certificados</h3>
      
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Egg Cooperation</Accordion.Header>
          <Accordion.Body>
          <div className="certificado">
       
       <a href="#imgModal" className="ancord-txt"><div className="icon-photo"> <span>Introducción a la programación</span></div>
        </a>
            
        <div id="imgModal" className="modal">
            <a href="#abilities" className="close">&times;</a>
            <img src="./certificados/1-Introducción a la Programación.jpeg" alt="Imagen ampliada"/>
        </div>
       </div>

       <div className="certificado">
       
       <a href="#imgModal-2" className="ancord-txt"><div className="icon-photo"><span>Introducción a Java</span></div>
        </a>
            
        <div id="imgModal-2" className="modal">
            <a href="#abilities" className="close">&times;</a>
            <img src="./certificados/2-Backend 1 Introducción a Java.jpeg" alt="Imagen ampliada"/>
        </div>
       </div>


       <div className="certificado">
       
       <a href="#imgModal-3" className="ancord-txt"><div className="icon-photo"><span>Base de datos + Frontend</span></div>
        </a>
            
        <div id="imgModal-3" className="modal">
            <a href="#abilities" className="close">&times;</a>
            <img src="./certificados/1694701532215-05094ac3-28fc-437b-b7d8-54f154d481d3_1.jpg" alt="Imagen ampliada"/>
        </div>
       </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
     </Col>
      
   </div>
     
     
  </div>
      



    )
}