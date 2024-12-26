import React from 'react'
import './Footer.css'
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
    return (
        <div className='wrap-footer'>
            <div className="footer">
                <div className="footer-delizi">
                    <div className="header-logo margin-bottom">
                        <div className="header-logo-circle">
                            <p>D</p>
                        </div>
                        <p className='header-logo-p'>Delizi<span className='header-logo-span'>oso</span></p>
                    </div>
                    <p className='margin-bottom' >Viverra gravida morbi egestas facilisis tortor netus non duis tempor.</p>
                    <div className="footer-delizi-social">
                        <div className="footer-delizi-socials">
                            <FaTwitter />
                        </div>
                        <a href="https://www.instagram.com/mukhamadali.001/">
                        <div className="footer-delizi-socials">
                            <FaInstagram />
                        </div>
                        </a>
                        
                        <div className="footer-delizi-socials">
                            <FaFacebookF />
                        </div>
                    </div>
                </div>

                <div className="footer-page">
                    <div className="footer-page-title margin-bottom">
                        <p>Page</p>
                    </div>
                    <p className='margin-bottom'>Home</p>
                    <p className='margin-bottom'>Menu</p>
                    <p className='margin-bottom'>Order online</p>
                    <p className='margin-bottom'>Catering</p>
                    <p className='margin-bottom'>Reservation</p>

                </div>

                <div className="footer-information ">
                    <div className="footer-information-title margin-bottom">
                        <p>Information</p>
                    </div>
                    <p className='margin-bottom'>About us</p>
                    <p className='margin-bottom'>Testimonial</p>
                    <p className='margin-bottom'>Event</p>
                </div>

                <div className="footer-get-in">
                    <div className="footer-get-in-title margin-bottom">
                        <p>Get in touch</p>
                    </div>
                    <p className='margin-bottom'>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</p>
                    <p className='margin-bottom'>delizioso@gmail.com</p>
                    <p className='margin-bottom'>+123 4567 8901</p>
                </div>
            </div>
        </div>
    )
}

export default Footer