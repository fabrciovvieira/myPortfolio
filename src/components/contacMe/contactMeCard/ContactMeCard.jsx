// REACT
import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { FaGithub } from "react-icons/fa";
//ESTILOS
import '../contactMeCard/ContactMeCard.css'




const ContactMeCard = ({ iconUrl, text }) => {

  let IconComponent

  switch (iconUrl) {
    case 'MdOutlineEmail':
      IconComponent = MdOutlineEmail;
      break;
    case 'FaGithub':
      IconComponent = FaGithub;
      break;
    default:
      break;
  }
  return (
    <div className='contact-details-card'>
      <div className="icon">
        {iconUrl === "FaGithub" ? (
          <a href="https://github.com/fabrciovvieira" target='_blank'>
            <IconComponent text={text} className="logo"/>
          </a>
        ): (
          <IconComponent text={text} className="logo"/>
        )}
          
      </div>
      <p>{text}</p>
    </div>
  )
}

export default ContactMeCard