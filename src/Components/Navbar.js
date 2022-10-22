import React from "react";
import './Navbar.css';
import logoImg from '../images/download.svg';
import box1 from '../images/box.svg';

const Navbar = () => {
    return (
        <div className="main-container">
            <div className="logo">
                <img src={logoImg} alt="Apple Logo" />
            </div>

            <div className="menu">
                <ul>
                    <li><a href="#">Store</a></li>
                    <li><a href="#">Mach</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">TV & Home</a></li>
                    <li><a href="#">Only on Apple</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            
            <div className="last-sec">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <img src={box1} alt="briefcase" />
            </div>
        </div>
    )
}


export default Navbar;