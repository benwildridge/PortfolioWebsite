import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './ContactForm.css';
import { send } from 'emailjs-com';

function ContactForm() {

  const [toSend, setToSend] = useState({
    name: '',
    from_email: '',
    message: '',
  });

  const [messageOutcome, setMessageOutCome] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_rxk5s79',
      'template_mbzqwod',
      toSend,
      'UQtuyTibbC4yW8iXx'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessageOutCome("Contact Form Successfully Sent");
        document.getElementById('contact_Form').reset();
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setMessageOutCome("Error: Contact Form Not Sent!")
      });
  };

  const handleInput = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  return (
    <>
    <Navbar/>
        
    <h1>Contact Me</h1>

    <form id='contact_Form' onSubmit={onSubmit}>      
      <input name="name" type="text" className="contact-input" placeholder="Name"  onInput={handleInput}/>   
      <input name="from_email" type="text" className="contact-input" placeholder="Email"  onInput={handleInput}/>
      <textarea name="message" className="contact-input" placeholder="Comment"  onInput={handleInput}></textarea>
      <input type="submit" value="SUBMIT"/>
    </form>
    <span>{messageOutcome}</span>
    </>

  )
}

export default ContactForm