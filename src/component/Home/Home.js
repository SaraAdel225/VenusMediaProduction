import {React,useState, useEffect} from "react";
import "./Home.css"
import { sliderData } from "./slider-data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

const  Home = () =>{
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () =>{
        setCurrentSlide(currentSlide === slideLength - 1  ? 0 : currentSlide + 1);
    }
    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0  ?  slideLength - 1 : currentSlide - 1);
    }
    function auto(){
        slideInterval = setInterval(nextSlide,intervalTime)
    }
    useEffect(()=>{
        setCurrentSlide(0)
    },[])
    useEffect(()=>{
        if(autoScroll){
            auto()
        }
        return () => clearInterval(slideInterval)
    },[currentSlide])
    return(
        <div className="home" id="home" dir= "rtl">
            <FontAwesomeIcon icon={faChevronRight} className ="arrow next" onClick={nextSlide} />
            <FontAwesomeIcon icon={faChevronLeft} className="arrow prev" onClick={prevSlide}/>
            {sliderData.map((slide, index) =>{
                return(
                    <div key = {index} className = {index === currentSlide ? "slide current" : "slide"}>
                        {index === currentSlide && (
                            <>
                            <div className="cover"></div>
                            <img src={slide.image} alt="slide"/>
                            <div className="contentCenter">
                                <div className="contents">
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.desc}</p>
                                </div>
                            </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
    
}

export default Home;