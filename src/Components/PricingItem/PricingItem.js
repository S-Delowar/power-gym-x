import React from 'react';
import './PricingItem.scss';


const PricingItem = (props) => {
    const { id, title, pricing, features, bgImg } = props.pricingItem;
    return (
        <div className="col-md-4">
            <div class="card bg-dark text-white text-center pt-10">
                <img class="card-img pricing-img" src={bgImg} alt="Card image" />
                <div class="card-img-overlay">
                    <h5 className="yellow-text">BILLED MONTHLY</h5>
                    <h3 class="card-title">{title}</h3>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    );
};

export default PricingItem;