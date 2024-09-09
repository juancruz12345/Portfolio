import { Button, Container, Row} from 'react-bootstrap'


import Proyects from './Proyects'
import AboutMe from './AboutMe'
import Abilities from './Abilities'
import Contact from './Contact'
import Navbar from './Navbar'

export default function Home(){
  window.scroll(0,0)
    return(
        <div>
         
      <Navbar/>
      
      <AboutMe/>
      
    
    <Container>
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
    <Button variant='dark' className='btnTop' href='#top'>Volver</Button>
    </div>
    )
}