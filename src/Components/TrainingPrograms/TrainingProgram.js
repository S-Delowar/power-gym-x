import React from 'react';
import './TrainingProgram.scss';
import img1 from '../../Images/bruce-mars-gJtDg6WfMlQ-unsplash.png';
import img2 from '../../Images/arthur-edelman-qfjuh4OLdxw-unsplash.jpg';

const TrainingProgram = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h1>TRAINING PROGRAM</h1>
            </div>
            <div className="row align-item-center">
                <div className="col-md-6">
                    <img className="training-img" src={img1} alt=""/>
                    <div class="card-img-overlay">
                            <button className="btn btn-warning">YOGA TRAINING SESSION</button>
                    </div>
                </div>
                <div className="col-md-6">
                <img className="training-img" src={img2} alt=""/>
                <div class="card-img-overlay">
                            <button className="btn btn-warning">CARDIO TRAINING SESSION</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingProgram;