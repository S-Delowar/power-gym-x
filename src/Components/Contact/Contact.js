import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import './Contact.scss';

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [buttonText, setButtonText] = useState('Send Message');
    const [sent, setSent] = useState(false);
    
    const onSubmit = (data, e) => {
        console.log(data);
        setButtonText('...sending');

        Axios.post('https://peaceful-mountain-79476.herokuapp.com/sendMessage', data)
        .then(res => {
            setSent(true);
            e.target.reset()
            alert('Message sent')
            console.log('sending success')
            setButtonText('Send Message')
        })
        .catch(() => {
            console.log('Message not sent')
            alert('Message not sent. Try again')
            setSent(true);
            e.target.reset()
            setButtonText('Send Message')
        })
    };
    return (
        <div>
            <div className="top-background-img">
                <div className="container classes">
                    <h1>CONTACT US</h1>
                </div>
            </div>
            <div className="container contact-page">
            <div className=" align-items-center ">
                <div className=" pb-4">
                    <div className="text-center">
                    <h4 className="text-success">GET IN TOUCH</h4>
                    </div>
                    <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" ref={register({ required: true })} placeholder="Your Name" />
                        {errors.name && <small className="error">Name is required</small>}

                        <input name="email" ref={register({ required: true })} placeholder="Your Email" />
                        {errors.email && <small className="error">Email is required</small>}

                        <textarea name="message" ref={register({ required: true })} placeholder="Type your message" />
                        {errors.message && <small className="error">Message is required</small>}

                        <input type="submit" className="btn btn-danger" value={buttonText} />
                    </form>
                </div>
                
            </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;