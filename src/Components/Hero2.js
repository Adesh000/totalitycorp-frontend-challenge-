import React from "react";
import '../styles/Hero2.css';

const Hero2 = () => {
    return (
        <div className="hero2">
            <div className="text-content">
                <h1>iPad Pro</h1>
                <h3>Super charged by M2</h3>
                <p>Available starting from 28 Oct.</p>
                <div className="buttons">
                    <button className="button-left">Learn more <i class="fa-solid fa-angle-right"></i></button>
                    <button className="button-right">Order now <i class="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Hero2;