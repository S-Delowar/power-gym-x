import React from 'react';
import './Home.scss'
import img1 from '../../Images/homeImg1.jpg';
import img2 from '../../Images/homeImg2.jpg';
import img3 from '../../Images/homeImg3.jpg';
import About from '../About/About';
import TrainingProgram from '../TrainingPrograms/TrainingProgram';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';


const Home = () => {
    return (
        <div className="home-section">
            <div className="top-section ">
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-md-6">
                            <h1>THE BEST FITNESS STUDIO IN TOWN</h1>
                            <p>This is best gym in Dhaka. This is best gym in Dhaka. This is best gym in Dhaka. This is best gym in Dhaka. This is best gym in Dhaka.</p>
                            <button className="btn btn-lg btn-warning">JOIN US</button>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
            <div className="container">
               <div className="row align-items-center">
                   <div className="col-md-4">
                       <img src={img1} alt=""/>
                       <h4>abdc</h4>
                   </div>
                   <div className="col-md-4">
                       <img src={img2} alt=""/>
                   </div>
                   <div className="col-md-4">
                       <img src={img3} alt=""/>
                   </div>
               </div>
            </div>
            <About></About>
            <TrainingProgram></TrainingProgram>
            <WhyChooseUs></WhyChooseUs>
            <div>
                hrsnnslnsljcnsjdnscns
            </div>

        </div>
    );
};

export default Home;