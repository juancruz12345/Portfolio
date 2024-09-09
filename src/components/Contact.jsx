
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import { Button, Toast, ToastContainer } from 'react-bootstrap';
import './contact.css'


export default function Contact(){

   

    const form = useRef() 
    const [validated, setValidate] = useState(false)
    const [show, setShow] = useState(false)
    const handleSubmit = (e) => {
      const form = e.currentTarget
      if(form.checkValidity()===false){
        e.preventDefault()
        e.stopPropagation()
        
      }
      
      setValidate(true)
      
      if(form.checkValidity()===true){
        
       
        
          sendEmail(e)
        
          form[1].value=''
         
        }
     
    }

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          })
          .then(
            () => {
              
              setShow(true)
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return(

        <div className='contact'>
      <div><h3>Contáctame</h3></div>

    <Form noValidate validated={validated} ref={form} onSubmit={handleSubmit}>
      <Form.Group className="contactEmail">
        <Form.Label className='label'>Email address</Form.Label>
        <Form.Control  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required type="email" placeholder="name@example.com" name="from_email" />
        <Form.Control.Feedback type='invalid'>Debe ser un email válido</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='contactMsg'>
        <Form.Label className='label'>¡Enviame un mensaje, una idea o lo que quieras!</Form.Label>
        <Form.Control required minLength={1} name="message" as="textarea" rows={3} />
        <Form.Control.Feedback type='invalid'>El mensaje no puede estar vacío </Form.Control.Feedback>
      </Form.Group>
      <Button className='contactBtn' variant='light' type="submit">Send</Button>
    </Form>
      <ToastComponent show={show} setShow={setShow}></ToastComponent>
        </div>

    )
}

function ToastComponent({show, setShow}){

  return(
    <ToastContainer position='bottom-center' style={{ zIndex: 1 }}>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Body>El mensaje se ha enviado correctamente.</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}