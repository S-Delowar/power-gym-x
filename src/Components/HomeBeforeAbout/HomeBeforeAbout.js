import React from 'react';
import './HomeBeforeAbout.scss';
import img1 from '../../Images/Group 81.png';

const HomeBeforeAbout = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="card progression">
                        <div className="card-text">
                            <h2>PROGRESSION</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, fugiat nihil unde debitis doloremque maxime!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="card workout">
                        <div className="card-text">
                            <div className="yellow-text">
                            <h2>WORKOUT</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, fugiat nihil unde debitis doloremque maxime!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="card nutrition">
                        <div className="card-text">
                            <h2>NUTRITION</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, fugiat nihil unde debitis doloremque maxime!</p>
                        </div>
                    </div>
                </div>
            </div>
  

        </div>

    );
};

export default HomeBeforeAbout;