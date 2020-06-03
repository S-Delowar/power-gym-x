import React from 'react';
import './Membership.scss';
import { useForm } from "react-hook-form";
import Payment from '../Payment/Payment';
import { Link } from 'react-router-dom';

const Input = ({ label, register, required }) => (
    <>
        <label>{label}</label>
        <input name={label} ref={register({ required })} />
    </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ label, register }, ref) => (
    <>
        <label>{label}</label>
        <select name={label} ref={ref}>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
    </>
));

const MemberShip = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div>
            <div className="top-background-img">
                <div className="container classes">
                    <h1>YOUR GYM MEMBERSHIP</h1>
                </div>
            </div>
            <div className="container membership-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="firstName">First Name:</label><br />
                            <input name="firstName" ref={register({ required: true })} />
                            {errors.firstName && <small className="error">First Name is required</small>}
                        </div>

                        <div className="col-md-6 label1">
                            <label htmlFor="lastName">Last Name:</label><br />
                            <input name="lastName" ref={register({ required: true })} />
                            {errors.lastName && <small className="error">Last Name is required</small>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="email">Email:</label><br />
                            <input name="email" ref={register({ required: true })} />
                            {errors.email && <small className="error">Email is required</small>}
                        </div>

                        <div className="col-md-6 label1">
                            <label htmlFor="mobileNumber">Mobile Number:</label><br />
                            <input name="mobileNumber" ref={register({ required: true })} />
                            {errors.mobileNumber && <small className="error">Mobile Number is required</small>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="dateOfBirth">Date of Birth:</label><br />
                            <input name="dateOfBirth" type="date" ref={register({ required: true })} />
                            {errors.dateOfBirth && <small className="error">Date of Birth is required</small>}
                        </div>

                        <div className="col-md-6 label1">
                            <label htmlFor="gender">Gender:</label><br />
                            <select id="card" name="gender" ref={register({ required: true })} >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                            {errors.gender && <small className="error">This field is required</small>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="address">Address:</label><br />
                            <input name="address" ref={register({ required: true })} />
                            {errors.address && <small className="error">Address is required</small>}
                        </div>

                        <div className="col-md-6 label1">
                            <label htmlFor="countryOrRegion">Country/Region:</label><br />
                            <input name="countryOrRegion" ref={register({ required: true })} />
                            {errors.countryOrRegion && <small className="error">Country or Region is required</small>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="city">City:</label><br />
                            <input name="city" ref={register({ required: true })} />
                            {errors.city && <small className="error">City is required</small>}
                        </div>

                        <div className="col-md-6 label1">
                            <label htmlFor="postCode">Post code:</label><br />
                            <input name="postCode" ref={register({ required: true })} />
                            {errors.postCode && <small className="error">Post code is required</small>}
                        </div>
                    </div>
                    <div className="row justify-content-end ">
                        <Link to="/payment">
                        <button className="btn btn-warning btn-lg  mt-4" type="submit" >Submit & Continue </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MemberShip;