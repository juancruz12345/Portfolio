import {  Container, Row} from 'react-bootstrap'

import Header from './Header'
import Proyects from './Proyects'
import AboutMe from './AboutMe'
import Abilities from './Abilities'
import Contact from './Contact'
import Footer from './Footer'



export default function Home(){
  window.scroll(0,0)

  
    return(
        <div>
         
      
    
      
    <Header></Header>
    <Container>
      <Row id='about'>
          
      <AboutMe/>
      </Row>
        <Row className='habilidadesRow' id='abilities' >
          <Abilities/>
        </Row>
        <Row id='proyects'>
         <Proyects/>
        </Row>
        <Row id='contact'>
          <Contact/>
        </Row>
    </Container>
    
    <Footer></Footer>
    </div>
    )
}