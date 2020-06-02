import React from 'react';
import './ClassItem.scss'

const ClassItem = (props) => {
    const { img, title } = props.item;
    return (
        <div className="col-md-4 pb-4">
            <div class="card">
                <img class="card-img-top class-img" src={img} alt="Card image cap" />
                
                    
                    <button className="btn btn-warning" >{title}  →</button>
            </div>
        </div>
    );
};

export default ClassItem;