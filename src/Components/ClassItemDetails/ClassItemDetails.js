import React, { useState, useEffect } from 'react';
import './ClassItemDetails.scss';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import checkMark from '../../Images/checkmark-square-2.png';
import Schedule from '../Schedule/Schedule';

const ClassItemDetails = () => {
    const { classId } = useParams()

    const [currentClass, setCurrentClass] = useState(null)
    //const {description, title, features} = currentClass;


    useEffect(() => {
        fetch('https://powerx-gym.herokuapp.com/classes/' + classId)
            .then(res => res.json())
            .then(data => {
                console.log(data[0])
                setCurrentClass(data[0])
            })
    }, [])

    // if(allClass) {
    //     setCurrentClass(allClass.find(fd => fd.id == classId));
    //     console.log(currentClass);
    // }



    return (
        <div>
            <div className="top-background-img">
                <div className="container classes">
                    <h1>OUR CLASSES</h1>
                </div>
            </div>

            {
                currentClass &&
                <div className="container class-details">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="class-details-img" src={currentClass.img} alt="" />
                            <p>
                                {currentClass.description}
                            </p>
                            <div className="features">
                                {
                                    currentClass.features.map((feature, index) => <p key={feature.index}>
                                        <img src={checkMark} className="check-mark" alt="" />
                                        <b> {feature}</b></p>)
                                }
                            </div>
                        </div>
                        <div className="col-md-6 pl-4 text-center mt-4 ">
                            <h2 className="mb-4"><span className="orange-text ">CLASS</span> SCHEDULE</h2>
                            <div>
                                <Schedule></Schedule>                                
                            </div>
                            <div className="join-us-btn">
                                <Link to="/pricing">
                                <button className="btn btn-warning btn-lg">JOIN US</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    );
};

export default ClassItemDetails;