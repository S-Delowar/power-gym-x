import React from 'react';
import './Payment.scss';
import msCard from '../../Images/credit-cards_mastercard.png';
import visaCard from '../../Images/credit-cards_visa.png';
import amexCard from '../../Images/credit-cards_amex.png';
import PayPalCard from '../../Images/Bitmap.png'
import { useForm } from 'react-hook-form';
import Footer from '../Footer/Footer';

const Payment = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log('payment', data)
        console.log('membership', props.membershipInfo);
        const membershipDetails = { membership: props.membershipInfo, payment: data };
        console.log(membershipDetails);
        fetch('https://powerx-gym.herokuapp.com/addUser', {
            method: 'POST',
            body: JSON.stringify(membershipDetails),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => console.log('Post done'))
        .catch(err => console.log(err))
        
    };

    return (
        <div>
            {/* <div className="top-background-img">
                <div className="container classes">
                    <h1>YOUR GYM MEMBERSHIP</h1>
                </div>
            </div> */}
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
        </div >
    );
};

export default Payment;