import React from "react";
import "./Visions.css"
// import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import busImg1 from "../img/Ellipse 4 (2).png"


const Visions = ()=>{
    return (
        <div className="vision" id="vision">
            <div className="word mainTitle" dir="rtl">
                <h2
                className="title"
                >
                    اراء عملائنا
                </h2>
            </div>
        <div className="container">
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            >
            <SwiperSlide>
                <img src={busImg1} alt="" style={{width: "100px" ,height:"100px"}}/>
                <p>تصميم ومونتاج الأفلام الوثائقية: نحن نقدم خدمات تصميم ومونتاج الأفلام الوثائقية بجودة عالية. نحن نعمل مع فريق من المحترفين المتخصصين في هذا المجال ل تقديم فيلم وثائقي يعكس الرسالة المراد إيصالها بشكل فعال ومؤثر.</p>
                <h6>مدير شركه الاتحاد</h6>
                <h5>محمد احمد محمد ابراهيم</h5>
                </SwiperSlide>
            <SwiperSlide>
            <img src={busImg1} alt="" style={{width: "100px" ,height:"100px"}}/>
                <p>تصميم ومونتاج الأفلام الوثائقية: نحن نقدم خدمات تصميم ومونتاج الأفلام الوثائقية بجودة عالية. نحن نعمل مع فريق من المحترفين المتخصصين في هذا المجال ل تقديم فيلم وثائقي يعكس الرسالة المراد إيصالها بشكل فعال ومؤثر.</p>
                <h6>مدير شركه الاتحاد</h6>
                <h5>محمد احمد محمد ابراهيم</h5>  
            </SwiperSlide>
            <SwiperSlide>
            <img src={busImg1} alt="" style={{width: "100px" ,height:"100px"}}/>
                <p>تصميم ومونتاج الأفلام الوثائقية: نحن نقدم خدمات تصميم ومونتاج الأفلام الوثائقية بجودة عالية. نحن نعمل مع فريق من المحترفين المتخصصين في هذا المجال ل تقديم فيلم وثائقي يعكس الرسالة المراد إيصالها بشكل فعال ومؤثر.</p>
                <h6>مدير شركه الاتحاد</h6>
                <h5>محمد احمد محمد ابراهيم</h5>  
            </SwiperSlide>
            <SwiperSlide>
            <img src={busImg1} alt="" style={{width: "100px" ,height:"100px"}}/>
                <p>تصميم ومونتاج الأفلام الوثائقية: نحن نقدم خدمات تصميم ومونتاج الأفلام الوثائقية بجودة عالية. نحن نعمل مع فريق من المحترفين المتخصصين في هذا المجال ل تقديم فيلم وثائقي يعكس الرسالة المراد إيصالها بشكل فعال ومؤثر.</p>
                <h6>مدير شركه الاتحاد</h6>
                <h5>محمد احمد محمد ابراهيم</h5>  
            </SwiperSlide>
            </Swiper>
        </div>
    </div>
    )
} 

export default Visions