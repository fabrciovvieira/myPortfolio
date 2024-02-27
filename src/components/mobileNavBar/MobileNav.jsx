import React from 'react'
import '../mobileNavBar/MobileNav.css'
import logo from "../../assets/images/logo.png"
import { IoIosMenu } from "react-icons/io";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>

        <div className="mobile-menu-container">
            <img src={logo} alt="logo-menu" className='logo'/>

            <ul>
                <li>
                    <a href="#hero" className="menu-item">Início</a>
                </li>
                <li>
                    <a href="#skills" className="menu-item">Habilidades</a>
                </li>
                <li>
                    <a href="#experience" className="menu-item">Experiência</a>
                </li>
                <li>
                    <a href="#projects" className="menu-item">Projetos</a>
                </li>

                <a href="#contactme" className="menu-item-btn">
                    <button className='contact-btn'>Fale comigo</button>
                </a>
            </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNav