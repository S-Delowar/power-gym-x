import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Axios from 'axios';
import Footer from '../Footer/Footer';
import EachClassItemDetails from './EachClassItemDetails';

const ClassItemDetails = () => {
    const {classId} = useParams()

    const [currentClass, setCurrentClass] = useState(null)


    useEffect(() => {
        fetch('https://powerx-gym.herokuapp.com/classes/'+classId)
            .then(res => res.json())
            .then(data => setCurrentClass(data))
    },[])
   
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
            <h2>{classId}</h2>
            {
                currentClass && <EachClassItemDetails currentClass={currentClass}></EachClassItemDetails>
                
            }
        </div>

    );
};

export default ClassItemDetails;