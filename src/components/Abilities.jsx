import { Stack, Image, Carousel } from "react-bootstrap"
import iconsArray from "../iconsArray"


export default function Abilities(){

    const {icons} = iconsArray()
    console.log(icons)
    return(
  <div>
       <div><h3>Habilidades aprendidas:</h3></div>
    <div className="slider">
       
     <div className="habilidades">
     {
        icons.map((icon, i)=>(
         
          <div key={i} className="habilidad">
            <img className="habilidadesItemImg" src={icon.url}></img>
          </div>
        
        )
        )
        
      }
     </div>
      
   </div>
     
     
  </div>
      



    )
}