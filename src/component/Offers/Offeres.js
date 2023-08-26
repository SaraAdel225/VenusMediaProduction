import React from "react";
import "./Offers.css"
import { motion } from "framer-motion";
import offerimg1 from "../img/Rectangle 46.png"
import offerimg2 from "../img/Rectangle 47.png"
import offerimg3 from "../img/Rectangle 48.png"
import offerimg4 from "../img/Rectangle 49.png"
import offerimg5 from "../img/Rectangle 50.png"
import offerimg6 from "../img/Rectangle 51.png"


const Offers = ()=>{
    return(
        <div className="offer" id="offers">
            <div className="word" dir="rtl">
            <h2
            className="title"
            >
                عروضنا
            </h2>
        </div>
            <div className="offerContent">
                <div className="container">
                <motion.div
                initial={{x:"-10rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="content">
                    <div className="image">
                        <img src={offerimg1} alt=""/>
                    </div>
                        <div className="text">
                            <h3 className="three">عرض خاص على تصوير مناسبات</h3>
                            <p>نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات.</p>
                            <button>اعرف المزيد</button>
                    </div>
                </motion.div>
                <motion.div
                initial={{y:"-10rem" ,opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="content">
                    <div className="image">
                        <img src={offerimg2} alt=""/>
                    </div>
                    <div className="text">
                        <h3 className="three">عرض خاص على تصوير مناسبات</h3>
                        <p>نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات.</p>
                        <button>اعرف المزيد</button>
                    </div>
                </motion.div>
                <motion.div
                initial={{x:"10rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="content">
                    <div className="image">
                        <img src={offerimg3} alt=""/>
                    </div>
                    <div className="text">
                        <h3 className="three">عرض خاص على تصوير مناسبات</h3>
                        <p>نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات.</p>
                        <button>اعرف المزيد</button>
                    </div>
                </motion.div>
                <motion.div
                initial={{x:"-10rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="content">
                    <div className="image">
                        <img src={offerimg4} alt=""/>
                    </div>
                    <div className="text">
                        <h3 className="three">عرض خاص على تصوير مناسبات</h3>
                        <p>نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات.</p>
                        <button>اعرف المزيد</button>
                    </div>
                </motion.div>
                <motion.div
                initial={{y:"-10rem" ,opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="content">
                    <div className="image">
                        <img src={offerimg5} alt=""/>
                    </div>
                    <div className="text">
                        <h3 className="three">عرض خاص على تصوير مناسبات</h3>
                        <p>نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات.</p>
                        <button>اعرف المزيد</button>
                    </div>
                </motion.div>
                <motion.div
                initial={{x:"10rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="content">
                    <div className="image">
                        <img src={offerimg6} alt=""/>
                    </div>
                    <div className="text">
                        <h3 className="three">عرض خاص على تصوير مناسبات</h3>
                        <p>نقدم خدمات تصوير الحفلات بجودة عالية، سواء كانت حفلات زفاف، أعياد ميلاد، حلات تخرج أو أي نوع آخر من الحفلات.</p>
                        <button>اعرف المزيد</button>
                </div>
            </motion.div>
        </div>
    </div>
</div>
    )
}

export default Offers