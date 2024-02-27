import React from 'react'
import '../skillCard/SkillCard.css'
import { MdOutlineWeb } from "react-icons/md"
import { FaLaptopCode } from "react-icons/fa"
import { GiSkills } from "react-icons/gi"

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {

    let IconComponent;

  switch (iconUrl) {
    case 'MdOutlineWeb':
      IconComponent = MdOutlineWeb;
      break;
    case 'FaTools':
      IconComponent = FaLaptopCode;
      break;
    case 'GiSkills':
      IconComponent = GiSkills;
      break;
    default:
      break;
  }
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`}
    onClick={() => onClick()}>

        <div className="skill-icon">
            <IconComponent className="icones-skills" size={100} color={"#7c5fe6"}/>
        </div>
        <span>{title}</span>
    </div>
  )
}

export default SkillCard