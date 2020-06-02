import React, { useEffect, useState } from 'react';
import './Classes.scss'
import ClassItem from '../ClassItem/ClassItem';
import Footer from '../Footer/Footer';

const Classes = () => {

    const [classes, setClasses] = useState(null)

    useEffect(() => {
        fetch('https://powerx-gym.herokuapp.com/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    })
    return (
        <div>
            <div className="top-background-img">
                <div className="container classes">
                    <h1>OUR CLASSES</h1>
                </div>
            </div>
            <div className="container pt-150">
            <div className="card-deck ">
                {
                    classes && classes.map(item => <ClassItem key={item._id} item={item} ></ClassItem> )
                }
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Classes;