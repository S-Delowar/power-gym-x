import React from 'react';
import './WhyChooseUs.scss';
import img1 from '../../Images/Group 87.png';
import img2 from '../../Images/Group 88.png';
import img3 from '../../Images/gift-2.png';

const WhyChooseUs = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h1>Why Choose Us</h1>
            </div>

            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src={img1} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">FREE FITNESS TRAINING</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={img2} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">TONS OF CARDIO & STRENGTH</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={img3} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">NO COMMITMENT MEMBERSHIPS</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;