import Nav from 'react-bootstrap/Nav';


export default function Navbar(){
    return(
        
           
          
            <Nav className='nav'>
            <Nav.Link className='navLink' href="#about">Sobre mi</Nav.Link>
            <Nav.Link className='navLink' href="#abilities">Habilidades</Nav.Link>
            <Nav.Link className='navLink' href="#proyects">Proyectos</Nav.Link>
            <Nav.Link className='navLink' href="#contact">Contacto</Nav.Link>
            </Nav>
      
         
      
    )
}