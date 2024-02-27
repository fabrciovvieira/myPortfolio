import React, { useRef } from 'react'
import '../workExperience/WorkExperience.css'
import ExperienceCard from './experienceCard/ExperienceCard'
import { WORK_EXPERIENCE } from '../../utils/data'
import Slider from 'react-slick'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const WorkExperience = () => {
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
    <section className='experience-container' id="experience">
        <h5>Experiência</h5>

        <div className="experience-content">
            <div className="arrow-right">
                <FaArrowRight className='arrow' onClick={slideRight}/>
            </div>
            <div className="arrow-left">
                <FaArrowLeft className='arrow' onClick={slideLeft}/>
            </div>
            <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item} />
            ))}
            </Slider>
            

        </div>
    </section>
  )
}

export default WorkExperience