import { createContext, useState, useEffect } from "react";


export const ThemeContext = createContext()

export function ThemeProvider({children}){

   
const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')


  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    console.log(theme)
  };
    
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}> 
            {children}
        </ThemeContext.Provider>

    )
}