import React from 'react';
import Footer from '../Footer/Footer';
import TrainingProgram from '../TrainingPrograms/TrainingProgram';

const Services = () => {
    return (
        <div>
            <div className="top-background-img">
                <div className="container classes">
                    <h1>SERVICES WE PROVIDE</h1>
                </div>
            </div>
            <TrainingProgram></TrainingProgram>

            <Footer></Footer>
        </div>
    );
};

export default Services;