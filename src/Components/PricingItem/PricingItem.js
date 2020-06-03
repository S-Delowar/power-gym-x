import React from 'react';
import './PricingItem.scss';
import { Link } from 'react-router-dom';


const PricingItem = (props) => {
    const { id, title, price, features, bgImg } = props.pricingItem;
    return (
        <div className="col-md-4">
            <div class="card bg-dark text-white text-center pt-10">
                <img class="card-img pricing-img" src={bgImg} alt="Card image" />
                <div class="card-img-overlay">
                    <h5 className="yellow-text">BILLED MONTHLY</h5>
                    <h3 class="card-title ">{title}</h3>
                    <h1 className="yellow-text">{price}</h1>
                    {
                        features.map((feature, index) => <p key={feature.index}>✓ {feature}</p>)
                    }
                    <Link to="/membership">
                        <button className="btn btn-warning btn-lg">PURCHASE</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PricingItem;