import React from "react";
import '../styles/Buttons.css';

const Buttons = () => {
    return (
        <div className="buttons">
            <button className="button-left">Learn more <i class="fa-solid fa-angle-right"></i></button>
            <button className="button-right">Order now <i class="fa-solid fa-angle-right"></i></button>
        </div>
    )
}

export default Buttons;