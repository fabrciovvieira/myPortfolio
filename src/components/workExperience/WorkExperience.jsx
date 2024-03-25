import React, { useRef, useState } from 'react'
import '../workExperience/WorkExperience.css'
import ExperienceCard from './experienceCard/ExperienceCard'
import { WORK_EXPERIENCE } from '../../utils/data'
import Slider from 'react-slick'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const WorkExperience = () => {
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
    }

    const handleAfterChange = (currentSlide) => {
        if (currentSlide === 0) {
            setShowPrev(false);
        } else {
            setShowPrev(true);
        }
        
        if (currentSlide === WORK_EXPERIENCE.length - 1) {
            setShowNext(false);
        } else {
            setShowNext(true);
        }
    };
    
  return (
    <section className='experience-container' id="experience">
        <h5>Experiência</h5>

        <div className="experience-content">
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
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item} />
            ))}
            </Slider>
            

        </div>
    </section>
  )
}

export default WorkExperience