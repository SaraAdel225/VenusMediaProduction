
import * as React from "react";
import "./Services.css"
import { motion } from "framer-motion";
import photo from "../img/canon-eos-5d-mark-iii-canon-eos-6d-digital-slr-camera-lens-slr-camera-acd4684e6e1a26bf39e7f0ded21a791d.png"
import camera from "../img/video-cameras-4k-resolution-professional-video-camera-camera-8e35c9bffb7201e5e24a6aec86926e41.png"
import graphic from "../img/digital-photography-camera-hd-laptop-a9aae8a8802d3e6a1978c582823f02d4.png"
import star from "../img/photographic-film-photography-camera-camera-b8ef09c382a887429943f81ede1485be.png"


const About = () => {
return (
    <div className="services" id="services">
        <div className="word mainTitle" dir="rtl">
            <h2
            className="title"
            >
                خدماتنا
            </h2>
        </div>
    <div className="firstServices">
        <div className="container">
        <div className="cont">
            <motion.img 
            initial={{x:"-10rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            className="imgPhoto"
            src= {photo} alt=""/>
            <motion.div 
            initial={{x:"10rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            className="word">
                <h3>تصوير حفلات مناسبات خاصة</h3>
                <p> نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات. نحن نستخدم أحدث التقنيات لضمان تقديم صور حية  تعكس الأجواء السعيدة للحفل نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات. نحن نستخدم أحدث التقنيات لضمان تقديم صور حية  تعكس الأجواء السعيدة للحفل نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات. نحن نستخدم أحدث التقنيات لضمان تقديم صور حية  تعكس الأجواء السعيدة للحفل</p>
            </motion.div>
        </div>
        <div className="cont right">
            <motion.div
            initial={{x:"-10rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            className="word">
                <h3>تصوير المنشأت والمطاعم وافلام وثائقية</h3>
                <p> نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات. نحن نستخدم أحدث التقنيات لضمان تقديم صور حية  تعكس الأجواء السعيدة للحفل نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات. نحن نستخدم أحدث التقنيات لضمان تقديم صور حية  تعكس الأجواء السعيدة للحفل نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات. نحن نستخدم أحدث التقنيات لضمان تقديم صور حية  تعكس الأجواء السعيدة للحفل</p>
            </motion.div>
            <motion.img
            initial={{x:"10rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            src={camera} alt=""/>
        </div>
        <div className="cont">
            <motion.img
            initial={{x:"-10rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            src={graphic} alt=""/>
            <motion.div className="word"
            initial={{x:"10rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            >
                <h3>تصاميم ابداعية مونتاج جرافيك</h3>
                <p> نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات. نحن نستخدم أحدث التقنيات لضمان تقديم صور حية  تعكس الأجواء السعيدة للحفل نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات. نحن نستخدم أحدث التقنيات لضمان تقديم صور حية  تعكس الأجواء السعيدة للحفل نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات. نحن نستخدم أحدث التقنيات لضمان تقديم صور حية  تعكس الأجواء السعيدة للحفل</p>
            </motion.div>
        </div>
        <div className="cont right">
            <motion.div
            initial={{x:"-10rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            className="word">
                <h3>تصوير المنشأت والمطاعم وافلام وثائقية</h3>
                <p> نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات. نحن نستخدم أحدث التقنيات لضمان تقديم صور حية  تعكس الأجواء السعيدة للحفل نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات. نحن نستخدم أحدث التقنيات لضمان تقديم صور حية  تعكس الأجواء السعيدة للحفل نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات. نحن نستخدم أحدث التقنيات لضمان تقديم صور حية  تعكس الأجواء السعيدة للحفل</p>
            </motion.div>
            <motion.img
            initial={{x:"10rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            src={star} alt=""/>
        </div>
    </div>
    </div>
    </div>
);
};

export default About;