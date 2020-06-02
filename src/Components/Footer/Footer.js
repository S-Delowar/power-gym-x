import React from 'react';
import './Footer.scss';
import youtubeImg from '../../Images/bxl-youtube.png';
import facebookImg from '../../Images/bxl-facebook.png';
import instragramImg from '../../Images/bxl-instagram.png';
import twitterImg from '../../Images/bxl-twitter.png';
import whatsAppImg from '../../Images/bxl-whatsapp.png'; 

const Footer = () => {
    return (
        <div className="bg-dark home-container ">
            <div className="container top-padding text-white">
                <div className="row">
                    <div className="col-md-2 large-font bold mt-20">
                        <a className="link" href="#"> POWER <span className="yellow-text">X</span> </a>
                    </div>
                    <div className="col-md-2">
                        <nav className="nav flex-column">
                            <p className=" bold mt-20">Need Help?</p>
                            <a className="link" href="#">Help Center</a>
                            <a className="link" href="#">Email Support</a>
                            <a className="link" href="#">Live Chat</a>
                            <a className="link" href="#">Gift Certificates</a>
                            <a className="link" href="#">Send Feedback</a>
                        </nav>
                    </div>
                    <div className="col-md-2 ">
                        <nav className="nav flex-column">
                            <p className="bold mt-20">Digital Resources</p>
                            <a className="link" href="#">Articles</a>
                            <a className="link" href="#">E-books</a>
                        </nav>
                    </div>
                    <div className="col-md-3">
                        <nav className="nav flex-column">
                            <p className="bold mt-20">Contact With Us</p>
                            <nav className="nav">
                            <a className="link" href="#">
                                <img src={youtubeImg} alt=""/>
                            </a>
                            <a className="link" href="#">
                                <img src={facebookImg} alt=""/>
                            </a>
                            <a className="link" href="#">
                                <img src={instragramImg} alt=""/>
                            </a>
                            <a className="link" href="#">
                                <img src={twitterImg} alt=""/>
                            </a>
                            <a className="link" href="#">
                                <img src={whatsAppImg} alt=""/>
                            </a>
                            </nav>
                            <a className="link" href="#">
                                Forum
                            </a>
                        </nav>
                    </div>
                    <div className="col-md-3">
                        <nav className="nav flex-column">
                            <p className="bold mt-20">Join Our Newsletter</p>
                            <p >
                                Get exclusive news, features and updates from The Shredder Weight Loss Academy.
                            </p>

                        </nav>
                    </div>
                </div>
            </div>
            <div className="text-center copyright-text">
                <p><small>©2020 Programming Hero. All Rights Reserved</small></p>
            </div>
        </div>
    );
};

export default Footer;