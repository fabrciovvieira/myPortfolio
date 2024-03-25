import React, { useRef, useState } from 'react'
import '../projectsDone/Projects.css'
import Slider from 'react-slick'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ProjectsCard from './projectsCard/ProjectsCard';
import { PROJECTS } from '../../utils/data'

const Projects = () => {
    const sliderRef = useRef();
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
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
    };

    const handleAfterChange = (currentSlide) => {
        if (currentSlide === 0) {
            setShowPrev(false);
        } else {
            setShowPrev(true);
        }
        
        if (currentSlide === PROJECTS.length - 1) {
            setShowNext(false);
        } else {
            setShowNext(true);
        }
    };

    return (
        <section className='project-container' id="projects">
            <h5>Projetos</h5>
            <div className="project-content">
                {showNext && (
                    <div className="arrow-right">
                        <FaArrowRight className='arrow' onClick={slideRight}/>
                    </div>
                )}
                {showPrev && (
                    <div className="arrow-left">
                        <FaArrowLeft className='arrow' onClick={slideLeft}/>
                    </div>
                )}
                <Slider
                    ref={sliderRef}
                    {...settings}
                    afterChange={handleAfterChange}
                >
                    {PROJECTS.map((item) => (
                        <ProjectsCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Projects;
