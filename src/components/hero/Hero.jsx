import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import fotoProfile from "../../assets/images/profile_anime.png"
import "../hero/Hero.css"

const Hero = () => {
  return (
    <section className="hero-container" id='hero'>
        <div className="hero-content">
            <h2>Elevando o padrão com uma experiência digital que inspira confiança.</h2>
            <p>Desenvolvedor Frontend Apaixonado | Transformando ideias em soluções web envolventes e visualmente atraentes</p>
        </div>
        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <FaReact className='icon-svg' color="#61DAFB"/>
                </div>
                <img className='profile' src={fotoProfile} alt="profile foto" />
            </div>

            <div>
                <div className="tech-icon">
                    <FaHtml5 className='icon-svg' color="#E44D26"/>
                </div>
                <div className="tech-icon">
                    <FaCss3Alt className='icon-svg' color="#1572B6"/>
                </div>
                <div className="tech-icon">
                    <IoLogoJavascript className='icon-svg' color="#F7DF1E"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero