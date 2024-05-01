import React, {useState, useRef} from 'react'
import { ABOUT } from '../../utils/data'
import './AboutMe.css'

const AboutMe = () => {

  return (
    <section id='aboutME'>
        <h1>Sobre mim</h1>
       <div className='about-me-container'>
       {ABOUT.map((item, index) => (
               <div key={index}>
                    {item.aboutMe.split('\n').map((texto, index) => (
                        <p key={index}>{texto}</p>
                    ))}
               </div>
            ))}
       </div>
    </section>
  )
}

export default AboutMe

{ABOUT.map((item, index) => (
    <div key={index}>
        {item.aboutMe.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))}
    </div>
))}