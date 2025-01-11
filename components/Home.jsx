import {  Container, Row, Tabs, Tab} from 'react-bootstrap'

import Header from './Header'
import Proyects from './Proyects'
import AboutMe from './AboutMe'
import Abilities from './Abilities'
import Contact from './Contact'
import Footer from './Footer'
import { useContext } from "react";
import {ThemeContext} from '../context/context.jsx'
import './Theme.css'



export default function Home(){
  
  const {toggleTheme} = useContext(ThemeContext)

  
    return(
        <div>
         
      
    
      
    <Header></Header> 
    <Container className='container'>
      <Tabs
      defaultActiveKey="about me"
      
      className="mb-3 nav-tab"
      fill
      >
        <Tab eventKey="about me" title="Sobre mi">
         
        <AboutMe/>
      </Tab>
      <Tab eventKey="proyects" title="Proyectos">
         
      <Proyects/>
      </Tab>
      <Tab eventKey="abilities" title="Habilidades">
         
      <Row className='habilidadesRow' id='abilities' >
              <Abilities/>
            </Row>
      </Tab>
      <Tab eventKey='contact' title="Contacto">
        <Contact></Contact>
      </Tab>

      </Tabs>
    </Container>
    
    <Footer></Footer>
  
    </div>
    )
}