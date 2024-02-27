import React, { useRef } from 'react'
import '../projectsDone/Projects.css'
import Slider from 'react-slick'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ProjectsCard from './projectsCard/ProjectsCard';
import { PROJECTS } from '../../utils/data'

const Projects = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScrow: 1,
        arrows: false, 
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScrow: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }
    
  return (
    <section className='project-container' id="projects">
        <h5>Projetos</h5>

        <div className="project-content">
            <div className="arrow-right">
                <FaArrowRight className='arrow' onClick={slideRight}/>
            </div>
            <div className="arrow-left">
                <FaArrowLeft className='arrow' onClick={slideLeft}/>
            </div>
            <Slider ref={sliderRef} {...settings}>
            {PROJECTS.map((item) => (
                <ProjectsCard key={item.title} details={item} />
            ))}
            </Slider>
            

        </div>
    </section>
  )
}

export default Projects