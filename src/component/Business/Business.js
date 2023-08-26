import React from "react";
import "./Business.css"
// import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import busImg1 from "../img/bus.png"
import busImg2 from "../img/bus1.png"
import busImg3 from "../img/bus2.png"
import busImg4 from "../img/bus3.png"
import busImg5 from "../img/bus4.png"
import busImg6 from "../img/bus5.png"


const Business = ()=>{
    return (
        <div className="business" id="bus" >
            <div className="word mainTitle" dir="rtl">
                <h2
                className="title"
                >
                    اعمالنا
                </h2>
            </div>
        <div className="container">
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                },
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            >
            <SwiperSlide><img src={busImg1} alt="" style={{width: "380px" ,height:"400px"}}/></SwiperSlide>
            <SwiperSlide><img src={busImg2} alt="" style={{width: "380px" ,height:"400px"}}/></SwiperSlide>
            <SwiperSlide><img src={busImg3} alt="" style={{width: "380px" ,height:"400px"}}/></SwiperSlide>
            <SwiperSlide><img src={busImg4} alt="" style={{width: "380px" ,height:"400px"}}/></SwiperSlide>
            <SwiperSlide><img src={busImg5} alt="" style={{width: "380px" ,height:"400px"}}/></SwiperSlide>
            <SwiperSlide><img src={busImg6} alt="" style={{width: "380px" ,height:"400px"}}/></SwiperSlide>
            </Swiper>
        </div>
    </div>
    )
} 

export default Business