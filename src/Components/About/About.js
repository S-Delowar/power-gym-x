import React from 'react';
import './About.scss';
import img1 from '../../Images/wells-chan-H-vAxuWxmi8-unsplash.jpg'

const About = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img className="about-img" src={img1} alt=""/>
                </div>
                <div className="col-md-6">
                    <h1>About Us</h1>
                    <h2>WE ARE HERE TO DREAM</h2>
                    <h2>OUR TEAM IS HERE TO SERVE YOU</h2>
                </div>
            </div>
        </div>
    );
};

export default About;