import React, { useRef } from 'react';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';


const Contact = () => {

   const form = useRef()

   const sendEmail = (e) => {

      const SERVICE_ID = 'service_z7w9yd9'
      const TEMPLATE_ID = 'template_gvhqi9d'
      const USER_ID = 'ceohqrruRoS5Jbpmo'

      e.preventDefault();

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });

      e.target.reset()
   };

   return (
      <section id='contact'>
         <h5>Get In Touch</h5>
         <h2>Contact Me</h2>

         <div className="container contact__container">
            <div className="contact__options">
               <article className="contact__option">
                  <MdOutlineEmail className='contact__option-icon' />
                  <h4>Email</h4>
                  <h5>javier4le.dev@gmail.com</h5>
                  <a href="mailto:javier4le.dev@gmail.com" target="_blank">Send a message</a>
               </article>
               <article className="contact__option">
                  <RiMessengerLine className='contact__option-icon' />
                  <h4>Messenger</h4>
                  <h5>Javier Rojas</h5>
                  <a href="https://m.me/Javier4le" target="_blank">Send a message</a>
               </article>
               <article className="contact__option">
                  <BsWhatsapp className='contact__option-icon' />
                  <h4>WhatsApp</h4>
                  <h5>+myphone</h5>
                  <a href="https://api.whatsapp.com/send?phone=+myphone" target="_blank">Send a message</a>
               </article>
            </div>
            {/* END OF CONTACT OPTIONS */}

            <form ref={form} onSubmit={sendEmail}>
               <input type="text" name='name' placeholder='Your Full Name' required />
               <input type="email" name='email' placeholder='Your Email' required />
               <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
               <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
         </div>
      </section>
   )
}

export default Contact