import React from "react";
import './Footer.css'

const Footer = () => {
    return(

    <div className="footer-container">
        <div className="upper-sec">
            <div className="box1">
                <p>Shop and Learn</p>
                <ul>
                    <li><a href="#">Store</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">TV & Home</a></li>
                    <li><a href="#">AirTag</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Gift Cards</a></li>
                </ul>
            </div>
            <div className="box2">
                <p>Services</p>
                <ul>
                    <li><a href="#">Apple Music</a></li>
                    <li><a href="#">Apple TV</a></li>
                    <li><a href="#">Apple Arcade</a></li>
                    <li><a href="#">iCloud</a></li>
                    <li><a href="#">Apple One</a></li>
                    <li><a href="#">Apple Books</a></li>
                    <li><a href="#">Apple Podcasts</a></li>
                    <li><a href="#">App Store</a></li>
                </ul>

                <p>Account</p>
                <ul>
                    <li><a href="#">Manage Your Apple ID</a></li>
                    <li><a href="#">Apple Store Account</a></li>
                    <li><a href="#">iCloud.com</a></li>
                </ul>
            </div>
            <div className="box3">
                <p>Apple Store</p>
                <ul>
                    <li><a href="#">Ways to Buy</a></li>
                    <li><a href="#">Apple Trade In</a></li>
                    <li><a href="#">Recycling Programme</a></li>
                    <li><a href="#">Order Status</a></li>
                    <li><a href="#">Shopping Help</a></li>
                </ul>
            </div>
            <div className="box4">
                <p>For Business</p>
                <ul>
                    <li><a href="#">Apple and Business</a></li>
                </ul>

                <p>For Education</p>
                <ul>
                    <li><a href="#">Apple and Education</a></li>
                    <li><a href="#">Shop for Education</a></li>
                    <li><a href="#">Shop for University</a></li>
                </ul>

                <p>For Healthcare</p>
                <ul>
                    <li><a href="#">Apple in Healthcare</a></li>
                    <li><a href="#">Health on Apple Watch</a></li>
                </ul>
            </div>

            <div className="box5">
                <div className="upper">
                    <p>Apple Values</p>
                    <ul>
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Supplier Responsibility</a></li>
                    </ul>
                </div>

                <div className="lower">
                    <p>About Apple</p>
                    <ul>
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Apple Leadership</a></li>
                        <li><a href="#">Career Opportunities</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">Ethics & Compliance</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Contact Apple</a></li>
                    </ul>
                </div>

            </div>
        </div>
        
        {/* Lower section */}

        <div className="lower-sec">
            <p>More ways to ship: <a href="#">Find a retailer</a> near you. Or Call 000800 040 1966</p>
            <div className="line"></div>
            <div className="lower-text">
                <div className="copyright">
                    Copywrite @ 2022 Apple Inc. All rights reserved.
                </div>
                <div className="policies">
                    <a href="#">Privacy policy</a>
                    <div className="v-line"></div>
                    <a href="#">Terms of Use</a>
                    <div className="v-line"></div>
                    <a href="#">Sales Policy</a>
                    <div className="v-line"></div>
                    <a href="#">Leagl</a>
                    <div className="v-line"></div>
                    <a href="#">Site Map</a>
                </div>
                <div className="countyr-name">
                    India
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;