import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Loading from '../components/Loading.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '../context/context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

    
      
       
        <ThemeProvider>
           <BrowserRouter>
             <Suspense fallback={<Loading></Loading>}>
          
                <App />
             
             </Suspense>
           </BrowserRouter>
        </ThemeProvider>
       
     

)
