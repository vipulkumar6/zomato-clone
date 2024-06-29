import React from 'react';
import './footer.css';
import { PiGlobe } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
    const zomato_logo_path = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";

    return (
        <>
            <div className="footer_wrapper">
                <div className="head">
                    <div className="logo_box">
                        <img src={zomato_logo_path} alt="zomato_logo_path" />
                    </div>
                    <div className="location">
                        <div>
                            <img src="./images/india.png" alt="india flag" />
                            <p>India</p>
                            <IoIosArrowDown />
                        </div>
                        <div>
                            <PiGlobe size={20} />
                            <p>English</p>
                            <IoIosArrowDown />
                        </div>

                    </div>
                </div>
                <div className="links">
                    <div className="aboutCompany">
                        <h4>About Zomato</h4>
                        <p>Who We Are</p>
                        <p>Blog</p>
                        <p>Work With Us</p>
                        <p>Investor Relations</p>
                        <p>Report Fraud</p>
                        <p>Press Kit</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="aboutCompany">
                        <h4>Zomaverse</h4>
                        <p>Zomato</p>
                        <p>Blinkit</p>
                        <p>Feeding India</p>
                        <p>Hyperpure</p>
                        <p>Zomaland</p>
                        <p>Weather Union</p>
                    </div>
                    <div className="aboutCompany">
                        <h4>For Restaurants</h4>
                        <p>Partner With Us</p>
                        <p>Apps For You</p>
                    </div>
                    <div className="aboutCompany">
                        <h4>Learn More</h4>
                        <p>Privacy</p>
                        <p>Security</p>
                        <p>Terms</p>
                        <p>Sitemap</p>
                    </div>
                    <div className="social">
                        <h4>Social Links</h4>
                        <div className="social-icons">
                            <i className="fa fas-brands fa-linkedin"></i>
                            <i className="fa fas-brands fa-instagram"></i>
                            <i className="fa fas-brands fa-twitter"></i>
                            <i className="fa fas-brands fa-youtube"></i>
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <div className='download_app'>
                            <div>
                                <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="play store" />
                            </div>
                            <div>
                                <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="play store" />

                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='footer_last'><p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.

                </p></div>
            </div>
        </>
    );
};

export default Footer;
