import React from "react";
import iPadImg from '../images/iPad-large.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="text-content">
                <h1>iPad</h1>
                <h3>Lovable.Drawable.Magical.</h3>
                <p>Available starting from 28 Oct.</p>
                <button className="button-left">Learn more <i class="fa-solid fa-angle-right"></i></button>
                <button className="button-right">Order now <i class="fa-solid fa-angle-right"></i></button>
            </div>

        </div>
    )
}

export default Hero;