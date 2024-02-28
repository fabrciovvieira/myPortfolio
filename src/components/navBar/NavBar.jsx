import React, { useState } from 'react'
import '../navBar/NavBar.css'
import MobileNav from '../mobileNavBar/MobileNav'
import logo from "../../assets/images/logo.png"
import { IoIosMenu, IoIosClose } from "react-icons/io";



const NavBar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu (!openMenu);
  };

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src={logo} alt="logo-site" className='logo'/>

          <ul>
            <li>
              <a href="hero" className="menu-item">Início</a>
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
          <button className='menu-btn' onClick={toggleMenu}>
          {openMenu ? <IoIosClose className='icone-menu' onClick={toggleMenu} /> : <IoIosMenu className='icone-menu' onClick={toggleMenu} />}
          </button>
          </div>
      </nav>
    </>
  )
}

export default NavBar