
import {lazy, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Theme.css'
import { ThemeContext } from '../context/context';
import { useContext } from 'react';

const Home = lazy(()=> import('../components/Home'))

function App() {
 
  const {theme,toggleTheme} = useContext(ThemeContext)
  const html = document.querySelector('html')
    html.setAttribute('data-bs-theme', theme)


  return (
   <div>
   
    <Home></Home>
   

   </div>
  )
}

export default App
