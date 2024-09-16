
import {lazy } from 'react'
import './App.css'
import {  Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(()=> import('./components/Home'))

function App() {
 

  return (
   <div>
   
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
            
        
      </Routes>
   

   </div>
  )
}

export default App
