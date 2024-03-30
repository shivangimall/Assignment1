
import React from 'react';
import './Footer.css';
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='blank'></div>
            <div className='footer-section'>
                <div className='footer-section-detail'>
                    <div className="about-section">
                        <div className="about-heading">
                            About Squarebric
                        </div>
                        <div className="about-content">
                            <li>Contact Us</li>
                            <li>Our values</li>
                            <li>Investment Philosophy </li>
                            <li>Careers</li>
                        </div>
                    </div>
                    <div className="media-section">
                        <div className="media-heading">
                            Media Centre
                        </div>
                        <div className="media-content">
                            <li>Blog</li>
                            <li>News & Press Releases</li>
                            <li>Photo Gallery </li>
                            <li>Video  Gallery </li>
                        </div>
                    </div>
                    <div className="e-service-section">
                        <div className="e-service-heading">
                            E-Services
                        </div>
                        <div className="e-service-content">
                            <li>Properties</li>
                            <li>Land</li>
                            <li>Community Management </li>
                        </div>
                    </div>
                </div>
                <div className='footer-updates'>
                    <p>Never Miss Out any update</p>
                    <div className='footer-update-detail'>
                        <input placeholder='Input Your Email' />
                        <button>SUBSCRIBE</button>
                    </div>
                    <div className='social-media'>
                        <div>
                            <FaFacebookF />
                            <FaYoutube />
                            <AiFillInstagram />
                            <FaLinkedinIn />

                        </div>
                        <div className='stores'>
                            <img src = {require("../assest/PlayStore.png")} alt ="playstore"/>
                            <img src = {require("../assest/AppStore.png")} alt ="appstore"/>
                        </div>


                    </div>

                </div>
            </div>

            <div className='footer-detail'>
                <div>
                    Information Security
                </div>
                <div>
                    Buying terms & condition
                </div>
                <div>
                    Rental terms & condition
                </div>
                <div>
                    Privacy Policy
                </div>
                <div>
                    Credit card payment terms & condition
                </div>
                <div>
                    Terms and condition
                </div>
                <div>
                    Booking Terms & condition
                </div>

            </div>
            <div className='footer-bottom'>
                <div>
                    <MdOutlineContentPasteSearch />
                    <p>ENQUIRy</p>
                </div>
                <div className='line'>|</div>
                <div>
                    <FaWhatsapp />
                    <p>WhatsApp</p>
                </div>
                <div className='line'>|</div>
                <div>
                    <MdOutlineWifiCalling3 />
                    <p>Call</p>
                </div>
                <div className='line'>|</div>
                <div>
                    <IoIosGlobe />
                    <p>3D Tour</p>
                </div>

            </div>
        </div>
    )
}

export default Footer;
