import React from 'react';
import './WhyChooseUs.scss';
import img1 from '../../Images/Group 87.png';
import img2 from '../../Images/Group 88.png';
import img3 from '../../Images/gift-2.png';

const WhyChooseUs = () => {
    return (
        <div className="container">
            <div className="text-center heading">
                <h1><span className="orange-text">WHY</span> CHOOSE US</h1>
            </div>

            <div className="card-deck text-center">
                <div className="card">
                    <div className="card-body">
                        <img src={img1} alt=""/>
                        <h5 className="card-title">FREE FITNESS TRAINING</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img src={img2} alt=""/>
                        <h5 className="card-title">TONS OF CARDIO & STRENGTH</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img src={img3} alt=""/>
                        <h5 className="card-title">NO COMMITMENT MEMBERSHIPS</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;