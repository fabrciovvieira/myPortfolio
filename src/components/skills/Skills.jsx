import React, { useState } from 'react'
import '../skills/Skills.css'
import SkillCard from '../skills/skillCard/SkillCard'
import { SKILLS } from "../../utils/data"
import SkillsInfoCard from './skillsInfoCard/SkillsInfoCard'



const Skills = () => {

    const [SelectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data)
    }

  return (
    <section className='skills-container' id='skills'>
        <h5>Aptidão Técnica</h5>

        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item) => (
                    <SkillCard 
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={SelectedSkill.title === item.title}
                    onClick={() => {
                        handleSelectSkill(item)
                    }}
                    />
                ))}
            </div>
            <div className="skills-info">
                <SkillsInfoCard
                heading={SelectedSkill.title}
                skills={SelectedSkill.skills}
                />
            </div>
        </div>
    </section>
  )
}

export default Skills