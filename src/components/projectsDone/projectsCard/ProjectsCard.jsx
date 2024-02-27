import React from 'react'
import '../projectsCard/ProjectsCard.css'

const ProjectsCard = ({ details }) => {
    const { title, description, link, technologies } = details;

    return (
        <div className="project-card">
          <h6>{title}</h6>
          <div className="project-tecno">
            <ul>
              {technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
              ))}
              </ul>
          </div>
          <p className='project-desc'>{description}</p>
          <button className='see-repo-btn'><a href={link} target='_blank'>Ver Repositório</a></button>
        </div>
      );
}

export default ProjectsCard