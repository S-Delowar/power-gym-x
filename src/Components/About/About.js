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
                    <h1><span className="gray-text">About Us</span></h1>
                    <h2><span className="orange-text">WE ARE HERE TO DREAM</span></h2>
                    <h2>OUR TEAM IS HERE TO SERVE YOU</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, earum repellendus explicabo numquam perferendis dolores, minima placeat quas dolorem eligendi voluptatibus nemo perspiciatis quos dolore dolorum quisquam officiis esse excepturi rerum! Minima qui fugit quae sint voluptas veniam eveniet recusandae.</p>

                </div>
            </div>
        </div>
    );
};

export default About;