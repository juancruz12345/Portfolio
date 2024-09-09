import React from "react";
import { Container, Row, Col, Image, Stack, Card } from 'react-bootstrap'

import {Link} from 'react-router-dom'

export default function Cards(){
    return(
      
        <div className="cards">
          <div><h3>Proyectos:</h3></div>
          <div className='cardsRow'>

            
          <Card className='card'>
          
               <Card.Img className="cardImg" src='.\proyects\Screenshot 2024-09-09 at 16-42-45 La Jardineta.png' variant='top'></Card.Img>
               <Card.Body className='cardBody'>
               <div className='cardDiv'>
               
               <Card.Title className="cardTitle">Vivero La Jardineta</Card.Title>
               
               <Card.Text className="cardText">E-commerce con autentificacion de usuario y Mercado Pago integrado</Card.Text>
              
               </div>
              <div className='linksDiv'>
              <Link className='link' to={'https://github.com/juancruz12345/Vivero-La-Jardineta'}>
                 <Image className='githubIcon' src='.\icons\githubwhite.svg'></Image></Link>
                 <Link className='link' to={'https://e-commerce-frontend-ylts.onrender.com/'}>
                 <Image className='githubIcon' src='.\icons\web-svgrepo-com.svg'></Image></Link>
              </div>
                 </Card.Body>
                 <Card.Footer>
                   <Stack direction='horizontal' className='iconsCard' gap={2}>
                   <Image loading='lazy' src='.\icons\vite-svgrepo-com.svg'></Image>
                   <Image loading='lazy' src='.\icons\js-svgrepo-com.svg'></Image>
                   
                   <Image loading='lazy' src='.\icons\react-svgrepo-com.svg'></Image>
                   </Stack>
                   
                 </Card.Footer>  
                 <Card.Title className="cardTitle">En desarrollo</Card.Title>
             </Card>
             
            
          <Card className='card'>
             <Card.Img className="cardImg" src='.\proyects\chat.png' variant='top'></Card.Img>
               <Card.Body className='cardBody'>
                 <div className='cardDiv'>
                 <Card.Title className="cardTitle">Chat online</Card.Title>
                 <Card.Text className="cardText">Chat online utilizando Socket.io y Turso.</Card.Text>
                 </div>
                 <Link className='link' to={'https://github.com/juancruz12345/Chat'}>
                 <Image className='githubIcon' src='.\icons\githubwhite.svg'></Image></Link>
                </Card.Body>
                 <Card.Footer>
                   <Stack direction='horizontal' className='iconsCard' gap={2}>
                   <Image loading='lazy' src='.\icons\socket-dot-io-svgrepo-com(1).svg'></Image>
                   <Image loading='lazy' src='.\icons\js-svgrepo-com.svg'></Image>
                   <Image loading='lazy' src='.\icons\html-svgrepo-com.svg'></Image>
                   <Image loading='lazy' src='.\icons\css-3-svgrepo-com.svg'></Image>
                   </Stack>
                 </Card.Footer>
             </Card>
         
             
              <Card className='card'>
               <Card.Img className="cardImg" src='.\proyects\todo.png' variant='top'></Card.Img>
               <Card.Body className='cardBody'>
               <div className='cardDiv'>
               <Card.Title className="cardTitle">TODO app</Card.Title>
               <Card.Text className="cardText">Aplicacion de lista de tareas creada con React y Typescript.</Card.Text>
               </div>
              <div className='linksDiv'>
              <Link className='link' to={'https://github.com/juancruz12345/TODO-app'}>
                 <Image className='githubIcon' src='.\icons\githubwhite.svg'></Image></Link>
                 <Link className='link' to={'https://todo-app-eight-flame-60.vercel.app'}>
                 <Image className='githubIcon' src='.\icons\web-svgrepo-com.svg'></Image></Link>
              </div>
                 </Card.Body>
                 <Card.Footer>
                   <Stack direction='horizontal' className='iconsCard' gap={2}>
                   <Image loading='lazy' src='.\icons\vite-svgrepo-com.svg'></Image>
                   <Image loading='lazy' src='.\icons\js-svgrepo-com.svg'></Image>
                   <Image loading='lazy' src='.\icons\typescript-icon-svgrepo-com.svg'></Image>
                   <Image loading='lazy' src='.\icons\react-svgrepo-com.svg'></Image>
                   </Stack>
                 </Card.Footer>
             </Card>
            
             <Card className='card'>
             <Card.Img className="cardImg" src='.\proyects\drawingapp.png' variant='top'></Card.Img>
               <Card.Body className='cardBody'>
                 <div className='cardDiv'>
                 <Card.Title className="cardTitle">Drawing App</Card.Title>
                 <Card.Text className="cardText">Aplicacion de dibujo creada con el canvas API de Javascript.</Card.Text>
                 </div>
                 <Link className='link' to={'https://github.com/juancruz12345/Drawing-App'}>
                 <Image className='githubIcon' src='.\icons\githubwhite.svg'></Image></Link>
                </Card.Body>
                 <Card.Footer>
                   <Stack direction='horizontal' className='iconsCard' gap={2}>
                   <Image loading='lazy' src='.\icons\vite-svgrepo-com.svg'></Image>
                   <Image loading='lazy' src='.\icons\js-svgrepo-com.svg'></Image>
                   <Image loading='lazy' src='.\icons\html-svgrepo-com.svg'></Image>
                   <Image loading='lazy' src='.\icons\css-3-svgrepo-com.svg'></Image>
                   </Stack>
                 </Card.Footer>
             </Card>

             
             <Card className='card'>
              <Card.Img className="cardImg" src='.\proyects\tetris.png' variant="top"></Card.Img>
               <Card.Body className='cardBody'>
              
               <div className='cardDiv'>
                 <Card.Title className="cardTitle">Tetris</Card.Title>
                 <Card.Text className="cardText">Juego de tetris creado con el canvas API de Javascript.</Card.Text>
               </div>
                <Link className='link' to={'https://github.com/juancruz12345/Tetris-JS'}>
                 <Image className='githubIcon' src='.\icons\githubwhite.svg'></Image></Link>
                
               </Card.Body>
               <Card.Footer>
                   <Stack direction='horizontal' className='iconsCard' gap={2}>
                   <Image loading='lazy' src='.\icons\vite-svgrepo-com.svg'></Image>
                   <Image loading='lazy' src='.\icons\js-svgrepo-com.svg'></Image>
                   <Image loading='lazy' src='.\icons\html-svgrepo-com.svg'></Image>
                   <Image loading='lazy' src='.\icons\css-3-svgrepo-com.svg'></Image>
                   </Stack>
               </Card.Footer>
             </Card>
          
           </div>
        </div>
    )
}