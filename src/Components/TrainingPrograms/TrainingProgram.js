import React from 'react';
import './TrainingProgram.scss';
import img1 from '../../Images/bruce-mars-gJtDg6WfMlQ-unsplash.png';
import img2 from '../../Images/arthur-edelman-qfjuh4OLdxw-unsplash.jpg';

const TrainingProgram = () => {
    return (
        <div className="container home-container">
            <div className="text-center heading">
                <h1><span className="orange-text">TRAINING</span> PROGRAM</h1>
            </div>
            <div className="card-deck">
                <div className="card">
                <img className="card-img-top training-img" src={img1} alt="Card image cap" />
                <div className="card-body">
                <button className="btn btn-warning">YOGA TRAINING SESSION →</button>
                </div>
                </div>
                <div className="card ">
                <img className="card-img-top training-img" src={img2} alt="Card image cap" />
                <div className="card-body">
                    <button className="btn btn-warning">CARDIO TRAINING SESSION →</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingProgram;