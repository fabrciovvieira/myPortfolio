// REACT
import React, { useState } from 'react'

//ESTILOS
import "../contactForm/ContactForm.css"

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondtName] = useState('');
  const [subject, setSubject] = useState('');

  const handleEmail = (e) => {
    const { value } = e.target;

    setEmail(value);
  }
  const handleMessage = (e) => {
    const { value } = e.target;

    setMessage(value);
  }
  const handleFirstName = (e) => {
    const { value } = e.target;

    setFirstName(value);
  }
  const handleSecondName = (e) => {
    const { value } = e.target;

    setSecondtName(value);
  }

  const handleSubject = (e) => {
    const { value } = e.target;

    setSubject(value);
  }

  const myEmail = 'fabriciovvieira@gmail.com'

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const body = `Olá,

    Meu nome é ${firstName} ${secondName}.
    Meu e-mail de contato é: ${email}.
    
    Mensagem: 
    ${message}

    Atenciosamente,
    ${firstName} ${secondName}`;

    const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abre o cliente de e-mail padrão do usuário com os dados do formulário preenchidos
    window.open(mailtoLink, '_blank');

    // Limpa os campos do formulário após o envio
    setEmail('');
    setMessage('');
    setFirstName('');
    setSecondtName('');
    setSubject('');
    
  };

  const isFormFilled = email !== '' && firstName !== '' && secondName !== '' && subject !== '' && message !== '';

  return (
    <div className='contact-form-content'>
        <form>
            <div className="name-container">
                <input 
                type="text" 
                name='firstname' 
                placeholder='Primeiro nome' 
                required 
                value={firstName}
                onChange={handleFirstName}/>
                <input 
                type="text" 
                name='lastname' 
                placeholder='Segundo nome' 
                required 
                value={secondName}
                onChange={handleSecondName}/>
            </div>
            <input 
            type="text" 
            name='email' 
            placeholder='E-mail' 
            required 
            value={email}
            onChange={handleEmail}/>
            <input 
            type="text" 
            name='text' 
            placeholder='Assunto' 
            required 
            value={subject}
            onChange={handleSubject}/>
            <textarea 
            type="text" 
            name='message' 
            placeholder='Digite sua mensagem aqui' 
            required 
            rows={4}
            value={message}
            onChange={handleMessage}></textarea>
            {!isFormFilled ? (
              <button type='submit' onClick={handleFormSubmit} disabled={!isFormFilled}>Preencha os dados para enviar</button>
            ) : (
              <button type='submit' onClick={handleFormSubmit}>Enviar</button>
            )}
            
        </form>
    </div>
  )
}

export default ContactForm