import React, { useState } from "react"
import logo from "../img/Group 3.png"
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import OutsideclickHandler from "react-outside-click-handler"


const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const getMenuStyle = (menuOpened) =>{
        if(document.documentElement.clientWidth <= 980){
            return {opacity: !menuOpened && "0"}
        }
    }
    return(
        <div className="header flexBetween">
            <div className = "container">
                <img src={logo} alt="" />
                <OutsideclickHandler
                onOutsideClick={()=>{
                    setMenuOpened(false)
                }}>
                <ul className="HeaderList flexBetween"  style={getMenuStyle(menuOpened)} dir="rtl">
                    <li><a href="#home">الصفحه الرئيسيه</a></li>
                    <li><a href="#about">من نحن</a></li>
                    <li><a href="#services">خدماتنا</a></li>
                    <li><a href="#offers">عروضنا</a></li>
                    <li><a href="#bus">اعمالنا</a></li>
                    <li><a href="#vision">اراء العملاء</a></li>
                    <li><a href="#footer">تواصل معنا</a></li>
                </ul>
                </OutsideclickHandler>
                <div className="list" onClick = {()=> setMenuOpened((prev) => !prev)}>
                <FontAwesomeIcon icon={faListCheck} />
                </div>
            </div> 
        </div>
    )
}
export default Header;