import React from 'react';
import './ClassItem.scss'
import { Link } from 'react-router-dom';

const ClassItem = (props) => {
    const { img, title, id } = props.item;
    return (
        <div className="col-md-4 pb-4">
            <div className="card">
                <img className="card-img-top class-img" src={img} alt="Card image cap" />
                <Link to={'/class/'+id}>
                    <button className="btn btn-warning" >{title}  →</button>
                </Link>
            </div>
        </div>
    );
};

export default ClassItem;