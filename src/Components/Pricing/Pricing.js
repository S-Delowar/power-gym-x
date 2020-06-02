import React, { useState, useEffect } from 'react';
import PricingItem from '../PricingItem/PricingItem';

const Pricing = () => {
    const [allPricing, setAllPricing] = useState(null)

    useEffect(() => {
        fetch('https://powerx-gym.herokuapp.com/pricing')
            .then(res => res.json())
            .then(data => setAllPricing(data))
    },[])

    return (
        <div>
            <div className="top-background-img">
                <div className="container classes">
                    <h1>PRICING PLANS</h1>
                </div>
            </div>
            <div className="container text-center home-container">
                <h2><span className="orange-text">CHOOSE THE OFFER</span> THAT SUITS YOU</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, fugiat nihil unde debitis doloremque maxime!</p>
            </div>
            <div className="container">
                <div className="card-deck">
                {
                    allPricing && 
                    allPricing.map(pricingItem =>
                         <PricingItem key={pricingItem.id} pricingItem={pricingItem}></PricingItem>
                    )
                }
                </div>
            </div>
            <div className="container">
                pricing
            </div>
        </div>
    );
};

export default Pricing;