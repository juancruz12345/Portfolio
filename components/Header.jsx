import { IconMoon, IconSun } from "@tabler/icons-react";
import { useContext } from "react";
import {ThemeContext} from '../context/context.jsx'
import './Theme.css'

export default function Header(){
    
    
    const {theme,toggleTheme} = useContext(ThemeContext)
    

    return(
        <header className="nav">
           

           
            <div className="icon-btn" onClick={toggleTheme}>
            {
                theme === 'dark'
                ?<IconSun></IconSun>
                :<IconMoon></IconMoon>
            }
            </div>
           
        </header>
    )
}