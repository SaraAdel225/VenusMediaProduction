import React from "react";
import "./More-about.css"
import { motion } from "framer-motion";

const MoreAbout = ()=>{
    return (
        <div className="moraAbout">
            <div className="container">
                <motion.div
                initial={{x:"-10rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                >
                    <h2>رؤيتنا</h2>
                    <p>مرحبًا بكم في موقعنا المتخصص في تصوير الحفلات وتصميم ومونتاج و الأفلام الوثائقية وتصوير المطاعم والمناسبات.</p>
                </motion.div>
                <motion.div
                initial={{y:"10rem" ,opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                >
                    <h2>قيمنا</h2>
                    <p>مرحبًا بكم في موقعنا المتخصص في تصوير الحفلات وتصميم ومونتاج و الأفلام الوثائقية وتصوير المطاعم والمناسبات.</p>
                </motion.div>
                <motion.div
                initial={{y:"10rem" ,opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                >
                    <h2>رسالتنا</h2>
                    <p>مرحبًا بكم في موقعنا المتخصص في تصوير الحفلات وتصميم ومونتاج و الأفلام الوثائقية وتصوير المطاعم والمناسبات.</p>
                </motion.div>
                <motion.div
                initial={{x:"10rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                >
                    <h2>مبادئنا</h2>
                    <p>مرحبًا بكم في موقعنا المتخصص في تصوير الحفلات وتصميم ومونتاج و الأفلام الوثائقية وتصوير المطاعم والمناسبات.</p>
                </motion.div>
            </div>
        </div>
    )
} 

export default MoreAbout