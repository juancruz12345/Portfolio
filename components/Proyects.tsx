import React from "react";
import { Container, Row, Col, Image, Stack, Card } from 'react-bootstrap'
import iconsArray from "../src/iconsArray";
import {Link} from 'react-router-dom'
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";

export default function Cards(){

  const {icons} = iconsArray()

  const proyectsArray = [{nombre:"PaisajistApp", 
    descripcion:"Página web de paisajismo enfocada en jardínes.",
    imgagenPortada:"./Screenshot 2024-10-23 at 18-51-22 PaisajistApp.png",
    link:'https://paisajist-app.vercel.app/',
    tecnologiasUsadas:[icons[0].url,icons[1].url,icons[5].url],
    linkGithub:"https://github.com/juancruz12345/PaisajistApp"
  },
  {nombre:"Tv Online", 
    descripcion:"Página web para ver tv online gratis",
    imgagenPortada:"./Screenshot 2024-09-16 at 19-06-25 TV Online.png",
    link:'https://tv-online-z08i.onrender.com/',
    tecnologiasUsadas:[icons[0].url,icons[1].url,icons[5].url],
    linkGithub:"https://github.com/juancruz12345/TV-Online"
  },
  {nombre:"Vivero online", 
    descripcion:"E-commerce con autenticación de usuario y pasarela de pago integrada(Mercado Pago). Desarrolle y desplegue tanto el frontend como el backend",
    imgagenPortada:"./Screenshot 2024-11-02 at 14-40-36 Vivero Online.png",
    tecnologiasUsadas:[icons[0].url,icons[1].url,icons[2].url],
    linkGithub:"https://github.com/juancruz12345/Vivero-La-Jardineta"
  },
  {nombre:"Drawing App", 
    descripcion:"Web app para dibujar similar a paint",
    imgagenPortada:"./drawingapp.png",
    tecnologiasUsadas:[icons[0].url,icons[4].url, icons[5].url],
    linkGithub:"https://github.com/juancruz12345/Drawing-App"
  },
  {nombre:"Chat online", 
    descripcion:"Aplicación de chat online utilizando socket.io",
    imgagenPortada:"./chat.png",
    tecnologiasUsadas:[icons[0].url,icons[2].url, './icons/socket-dot-io-svgrepo-com(1).svg'],
    linkGithub:"https://github.com/juancruz12345/Chat"
  },
  {nombre:"Tetris", 
    descripcion:"Juego de tetris desarrollado con vanilla JS",
    imgagenPortada:"./Screenshot 2024-11-02 at 14-13-49 Tetris.png",
    tecnologiasUsadas:[icons[0].url,,icons[4].url,icons[5].url],
    linkGithub:"https://github.com/juancruz12345/Tetris-JS"
  },
  {nombre:"TODO-App", 
    descripcion:"Aplicacion de lista de tareas",
    imgagenPortada:"./todo.png",
    tecnologiasUsadas:[icons[1].url,,icons[7].url],
    linkGithub:"https://github.com/juancruz12345/TODO-app"
  }
]

    return(
      
        <div className="cards">
        <div className="cards-div">
        <div className="cards-title">Proyectos:</div>
          <div className='cardsRow'>
          
          {
            proyectsArray.map((e,i)=>
               
          <Card key={i} className='card'>
          
          
          <div className="div-img">
          <Card.Img loading="lazy" className="cardImg" src={e.imgagenPortada} variant='top'></Card.Img>
          
          <div className="div-superior-img">
            {
              e.tecnologiasUsadas.map((imagen,i)=>
                
                 <div key={i}>
                   <img src={imagen}></img>
                 </div>
            
              )
            }
          </div>


          </div>
       
          
          <Card.Body className='cardBody'>
          <div className='cardDiv'>
          
          <Card.Title className="cardTitle">{e.nombre}</Card.Title>
          
          <Card.Text className="cardText"><span>{e.descripcion}</span></Card.Text>
         
          </div>
         <div className='linksDiv'>
         <Link className='link' to={e.linkGithub}>
            <IconBrandGithub className='githubIcon'></IconBrandGithub>
            </Link>
         {
          e.link 
          ? <Link className='link' to={e.link}>
              <IconWorld className='githubIcon'></IconWorld>
            </Link>
            : <></>
         }
         </div>
            </Card.Body>
           
          
        </Card>
            )
          }
             
            
        
          
           </div>
        </div>
        </div>
    )
}