import React from "react";
import '../styles/Textbox.css';
import Buttons from "./Buttons";

const Textbox = () => {
    return (
        <div className="text-content">
                <h1>iPad</h1>
                <h3>Lovable.Drawable.Magical.</h3>
                <p>Available starting from 28 Oct.</p>
                <Buttons />
        </div>
    )
}

export default Textbox;