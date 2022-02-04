import "./contact.scss"
import emailjs from "emailjs-com";
import React, { useRef } from 'react';

const Contact = () => {
    const formRef = useRef

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_czrtuyj', 
            'template_60f9ioq', 
            formRef.current, 
            'user_6lvljyPRltrXndg1r5pcL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
    };
    

    return (
        <div className='contact' id="contact">
            <div className="left">
                <h1>Contact me.</h1>
                <p className="c-desc">
                <b>Don´t hesitate to contact me!</b>I’d love to hear about what you’re working on and find a way to work together.
                </p>
                   
                    {/* <img src="assets/mail4.png" height="200px" className="contact"/> */}
            </div>

            <div className="right">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" name="user_name" placeholder="Name" required/>
                    <input type="email" name="user_email" placeholder="Email" required />
                        
                    <textarea name="message" rows="5" placeholder="Message" required/> <br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    
    );
};

export default Contact;
