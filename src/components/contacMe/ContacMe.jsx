// REACT
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import React from 'react'
// ESTILOS
import '../contacMe/ContacMe.css'
//COMPONENTES
import ContactMeCard from './contactMeCard/ContactMeCard'
import ContactForm from './contactForm/ContactForm'



const ContacMe = () => {

  const whatsappNumber = "+5548996571225"; // Substitua pelo seu número de telefone do WhatsApp
  const message = "Olá! Estou entrando em contato através do seu portfólio.";

  // Formatando o link do WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className='contact-container' id='contactme'>
        <h5>Entre em contato comigo!</h5>

        <div className="contact-content">
            <div style={{ flex: 1}}>
                <ContactMeCard 
                iconUrl="MdOutlineEmail"
                text="Fabriciovvieira@gmail.com"/>
                 <ContactMeCard 
                iconUrl="FaGithub"
                text="https://github.com/fabrciovvieira"/>
                <div className="social-container">
                  <div className="card-logo">
                    <a href="https://www.instagram.com/fabrciovvieira?igsh=MXRldnN3dWRpemRpMA%3D%3D&utm_source=qr" target='_blank'>
                      <FaInstagram className="social"/>
                    </a>
                  </div>
                  <div className="card-logo">
                    <a href="https://www.linkedin.com/in/fabricio-vieira-64a268145/ " target='_blank'>
                      <FaLinkedin className="social"/>
                    </a>
                  </div>
                  <div className="card-logo">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp className="social"/>
                    </a>
                  </div>
                </div> 
            </div>
            <div style={{ flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContacMe