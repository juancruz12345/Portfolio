import { IconMoon } from "@tabler/icons-react";
import { Navbar, Nav } from "react-bootstrap";
import { useContext } from "react";
import {ThemeContext} from '../context/context.jsx'
import './Theme.css'

export default function Header(){
    
    
    const {toggleTheme} = useContext(ThemeContext)
    

    return(
        <header className="nav">
            <Navbar expand="lg" className="navbar">
         
           <Nav.Link className="link-nav" href="#about">Sobre mi</Nav.Link>
            <Nav.Link className="link-nav" href="#abilities">Habilidades</Nav.Link>
            <Nav.Link className="link-nav" href="#proyects">Proyectos</Nav.Link>
            <Nav.Link className="link-nav" href="#contact">Contacto</Nav.Link>
            </Navbar>

            <div className="icon-nav">
            <div className="icon-btn" onClick={toggleTheme}>
            <IconMoon></IconMoon>
            </div>
            </div>
        </header>
    )
}