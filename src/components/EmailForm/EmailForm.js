import './EmailForm.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailForm() {
  const form = useRef();
  const [divVisivel, setDivVisivel] = useState(true);
  const [classButton, setClassButton] = useState('buttonSent');
  const [sendForm, setsendForm] = useState('sendFormHidden');

  const sendEmail = (e) => {
    e.preventDefault();
    
    setDivVisivel(!divVisivel);
    setClassButton(divVisivel ? 'buttonHidden' : 'buttonSent');
    setsendForm(divVisivel ? 'sendForm' : 'sendFormHidden');
    
    emailjs.sendForm('service_zenas', 'contact_form', form.current, 'wDyPV47mcwugEePoZ')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

    return (
    <form id='inputsContainer' ref={form} onSubmit={sendEmail}>
        <div className='sendEmailinputs'>
            <label htmlFor="name">Nome</label>
            <input type="text" name="user_name" required></input>
        </div>
        <div className='sendEmailinputs'>
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" required></input>
        </div>
        <div className='sendEmailinputs'>
            <label htmlFor="msg">Mensagem</label>
            <textarea name="message"></textarea>
        </div>
        <div className='sendEmailinputs'>
            <button className={classButton} type='submit'>Enviar</button>
            <div className={sendForm}>Mensagem enviada!</div>
        </div>
    </form>
    );
  }
  