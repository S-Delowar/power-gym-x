import React, { useState } from 'react';
import './Membership.scss';
import { useForm } from "react-hook-form";
import Payment from '../Payment/Payment';
import { Link } from 'react-router-dom';
import msCard from '../../Images/credit-cards_mastercard.png';
import visaCard from '../../Images/credit-cards_visa.png';
import amexCard from '../../Images/credit-cards_amex.png';
import PayPalCard from '../../Images/Bitmap.png';

const MemberShip = () => {
    const [membershipInfo, setMembershipInfo] = useState(null)

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log('data',data)
        setMembershipInfo(data);
        
    };


    return (
        <div>
            <div className="top-background-img">
                <div className="container classes">
                    <h1>YOUR GYM MEMBERSHIP</h1>
                </div>
            </div>
            <div style={{ display: membershipInfo && 'none' }}>
                <div className="container membership-form">
                    <div className="text-center mb-4">
                        <h4 className="orange-text">STEP-1</h4>
                        <hr />
                    </div>
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

                            <button className="btn btn-warning btn-lg  mt-4" type="submit" >Submit & Continue </button>

                        </div>
                    </form>
                </div>
            </div>

            <div style={{ display: membershipInfo ? 'block' : 'none' }}>
                <Payment membershipInfo={membershipInfo}></Payment>
            </div>

            {/* <div style={{ display: membershipInfo ? 'block' : 'none' }}>
                <div className="container payment-page">
                    <div className="text-center mb-4">
                        <h4 className="orange-text">STEP-2</h4>
                        <hr />
                    </div>
                    <div className="credit-card-section">

                        <div className="row">
                            <div className="col-md-8">
                                <h4>Credit Card</h4>
                                <p>Safe money transfer using bank account. Visa, Maestro, Discover, American Express</p>
                            </div>
                            <div className="col-md-4 row justify-content-end">
                                <div>
                                    <img className="ml-2" src={msCard} alt="" />
                                    <img className="ml-2" src={visaCard} alt="" />
                                    <img className="ml-2" src={amexCard} alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="payment-page">
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <label htmlFor="cardNumber">CARD NUMBER:</label><br />
                                            <input name="cardNumber" ref={register({ required: true })} placeholder="0000 0000 0000 0000" />
                                            {errors.cardNumber && <small className="error">Card number is required</small>}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="name">NAME ON CARD:</label><br />
                                            <input name="name" ref={register({ required: true })} />
                                            {errors.name && <small className="error">Name is required</small>}
                                        </div>

                                        <div className="col-md-3 label1">
                                            <label htmlFor="expiryDate">EXPIRY DATE:</label><br />
                                            <input name="expiryDate" ref={register({ required: true })} placeholder="MM/YY" />
                                            {errors.expiryDate && <small className="error">Expiry Date is required</small>}
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="CVVcode">CVV CODE:</label><br />
                                            <input name="CVVcode" ref={register({ required: true })} />
                                            {errors.CVVcode && <small className="error">CVV code is required</small>}
                                        </div>
                                    </div>

                                </div>

                                <button type="submit" className="btn btn-primary mt-2"> PAY </button>
                            </form>
                        </div>
                    </div>
                    <div className="paypal-section">
                        <div className="row">
                            <div className="col-md-8">
                                <h4>PayPal</h4>
                                <p>You will be redirected to PayPal website to complete your purchase security.</p>
                            </div>
                            <div className="col-md-4 row justify-content-end">
                                <div>
                                    <img src={PayPalCard} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default MemberShip;