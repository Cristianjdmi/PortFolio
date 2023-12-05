import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faMessage,} from '@fortawesome/free-solid-svg-icons';
import Modal from './modal';
import "./modal.css"

function Contact() {
  const [chiuso, setChiuso] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   

    emailjs.sendForm('service_rimk5om', 'template_6arzpjb', form.current, '5GZbhFOpAam4KPASO')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        setChiuso(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact' className='contact-section'>
      <h1>
        Contact <span>Me</span> <FontAwesomeIcon icon={faEnvelope} />
      </h1>
      <p>
        Sono un appassionato web developer, pronto ad applicare le mie competenze per realizzare soluzioni web. Se hai
        domande, suggerimenti o progetti interessanti da discutere, ti invito a contattarmi. Sarà un piacere collaborare
        con te per portare avanti le tue idee digitali.
      </p>
      <div className='border'></div>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <label>
          <FontAwesomeIcon className='fontbianca' icon={faUser} /> Nome
        </label>
        <input className='contact-form-text' required placeholder='e. Cristian' type="text" name="user_name" />
        <label>
          <FontAwesomeIcon className='fontbianca' icon={faEnvelope} /> Email
        </label>
        <input
          required
          className='contact-form-text'
          placeholder='e. LaTuaBestMail@***.com'
          type="email"
          name="user_email"
        />
        <label>
          <FontAwesomeIcon className='fontbianca' icon={faMessage} /> Messaggio
        </label>
        <textarea required className='contact-form-text' placeholder='Messaggio' name="message" />
        <input className='contact-form-btn' type="submit" value="Send" />
      </form>

      {chiuso && (
        <Modal trigger={chiuso} setTrigger={setChiuso}>
          <h3>Abbiamo Inviato la tua Email con successo ✅</h3>
        </Modal>
      )}
    </section>
  )
}

export default Contact;
