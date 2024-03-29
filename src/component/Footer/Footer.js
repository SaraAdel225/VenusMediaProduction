import React from "react";
import "./Footer.css"
import logo from "../img/Untitled-1.png"
import youtube from "../img/youtube.png"
import facebook from "../img/facebook.png"
import linkedin from "../img/linkedin.png"
import instagram from "../img/instagram.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAnglesLeft} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons'

const Footer = ()=>{
    return(
        <div className="footer" id="footer">
        <div className="shapedividers_com-8681"></div>
        <div className="container">
            <div className="content">
            <div className="colum_one">
                    <div>
                        <FontAwesomeIcon icon={faLocationDot} className="iconFooter"/>
                        <p>مصر، الجيزة </p>
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faClock} className="iconFooter"/>
                        <p>Business Hour:From 10:00 To 18:00</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhoneVolume} className="iconFooter"/>            
                        <div>
                            <p>+20123456789</p>
                            <p>+20198765432</p>
                        </div>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com"><img src={facebook} alt=""/></a>
                        <a href="https://youtube.com"><img src={youtube} alt=""/></a>
                        <a href="https://instagram.com"><img src={instagram} alt=""/></a>
                        <a href="https://linkedin.com"><img src={linkedin} alt=""/></a>

                    </div>
                </div>
                <div className="class">
                    <ul>
                        <li><a href="#home"><span>الصفحه الرئيسيه</span> <FontAwesomeIcon icon={faAnglesLeft} className="footerIcon"/></a></li>
                        <li><a href="#about"><span>من نحن</span> <FontAwesomeIcon icon={faAnglesLeft} className="footerIcon"/></a></li>
                        <li><a href="#services"><span>خدماتنا</span><FontAwesomeIcon icon={faAnglesLeft} className="footerIcon"/> </a></li>
                        <li><a href="#offers"><span>عروضنا</span> <FontAwesomeIcon icon={faAnglesLeft} className="footerIcon"/> </a></li>
                        <li><a href="#bus"><span>اعمالنا</span> <FontAwesomeIcon icon={faAnglesLeft} className="footerIcon"/></a></li>
                        <li><a href="#vision"><span>اراء العملاء</span> <FontAwesomeIcon icon={faAnglesLeft} className="footerIcon"/></a></li>

                    </ul>
                </div>
                <div className="class">
                    <img className="logo" src={logo} alt=""/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
