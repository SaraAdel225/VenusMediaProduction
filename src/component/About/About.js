
import * as React from "react";
import "./About.css";
import { motion } from "framer-motion";
import aboutImg from "../img/7 Of The Worst Travel Photography___.gif"
import MoreAbout from '../More-about/More-about';

const About = () => {
    return (
        <div className="about" id="about">
            <div className="word" dir="rtl">
                <h2
                className="title"
                >
                    من نحن
                </h2>
            </div>
            <div className = "container flexBetween">
                <motion.img className="aboutImg" 
                initial={{x:"-10rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                src={aboutImg} alt=""/>
                <div>
                    <div className="read">
                    <motion.h4
                    initial={{x:"10rem" ,opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{duration:2, type:"spring"}}
                    > 
                    مرحبًا بكم في موقعنا المتخصص في تصوير الحفلات وتصميم ومونتاج و الأفلام الوثائقية وتصوير المطاعم والمناسبات. نحن نقدم خدماتنا الاحترافية للأفراد والشركات والمؤسسات الكبيرة والصغيرة. نحن نفخر بتقديم خدماتنا بأعلى مستويات الجودة والاحترافية. اتصل بنا اليوم لمعرفة المزيد عن خدماتنا وكيف يمكننا مساعدتك في توثيق أجمل لحظات حياتك.
                    </motion.h4>
                    </div>
                    <a href="/">اطلع علي أعمالنا</a>
                </div>
            </div>
            <MoreAbout/>
        </div>
    );
};

export default About;