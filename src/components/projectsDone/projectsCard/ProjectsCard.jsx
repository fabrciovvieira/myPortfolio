import React from 'react'
import '../projectsCard/ProjectsCard.css'

const ProjectsCard = ({ details }) => {
    const { title, description, link_repo, link_acao, technologies } = details;

    return (
        <div className="main-container-projects">
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
            <div className="btn-flex-projects">
              <button className='see-repo-btn'><a href={link_repo} target='_blank'>Ver Repositório</a></button>
              {link_acao &&
              <button className='see-repo-btn'><a href={link_acao} target='_blank'>Ver em ação</a></button>}
            </div>
          </div>
        </div>
      );
}

export default ProjectsCard