import React from 'react'
import '../skillsInfoCard/SkillsInfoCard.css'
import { MdDownload } from "react-icons/md";
import certificadoFrontEnd from '../../../certificados/frontEndCertificado.pdf'


const SkillsInfoCard = ({ heading, skills }) => {

  return (
    <div className='skills-info-card'>
        {heading === 'Certificados' ? (
            <h6 className='h6-certificado'>{heading}<a href={certificadoFrontEnd} download>
                <MdDownload />
            </a> </h6>
        ):(
            <h6>{heading}</h6>
        )}
        <div className="skills-info-content">
            {skills.map((item, index) => (
                <React.Fragment key={`skill_${index}`}> 
                    <div className='skill-info'>
                        <p>{item.skill}</p>
                        <p className="percentage">{item.percentage}</p>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress" style={{ width: item.percentage }}>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default SkillsInfoCard