import React from 'react';
import emailjs from 'emailjs-com';

import './Contact.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import SocialMediaIcon from '../footer/SocialMediaIcon';
require('dotenv').config()

const skeleton_message = {
    client_name: "",
    client_email: "",
    contact_number: "",
    order_book: "",
    delivery_address: "",
    message: ""
}

 const Contact = () => {
    const [emailMessage, setEmailMessage] = useState(skeleton_message)

    const onChangeInputHandler = e => {
        e.preventDefault()
 
        const {name, value} = e.target
        setEmailMessage({...emailMessage, [name]:value})
    }

    const sendEmail = (e) => {
    e.preventDefault();
    window.confirm("Send email?")
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    // e.target.reset()
    setEmailMessage(skeleton_message)
  }


  return (
      <>
    <h2>Get in touch!</h2>
    <div className="contact">

        <div className="contact__info">
            <div>
                <p>I love hearing from readers through email and getting to know you on any of the social media sites listed below.</p>
                <div className="info__links">
                    
                    <p>
                        <span className="media">
                            <SocialMediaIcon Icon={FacebookIcon} color='#3b5998' size="27px"/>
                            <span style={{color: "#3b5998", fontSize: "19px"}}>Facebook:</span>
                        </span>
                        <a href="https://www.facebook.com/siphumelele.kati.50">@Sphumelele cat-man Kati</a>
                        <a href="https://www.facebook.com/permalink.php?story_fbid=115816160722038&id=102334212070233&notif_id=1624227593868925&notif_t=page_followed_contents_awareness&ref=notif">@slippy-margin book</a>
                    </p>
                    <p>
                        <span className="media">
                            <SocialMediaIcon Icon={InstagramIcon} color='#bc2a8d' size="27px"/>
                            <span style={{color: "#bc2a8d", fontSize: "19px"}}>Instagram:</span>
                        </span>
                        <Link to="/">@Sphumelele cat-man Kati</Link>
                        <Link to="/">@slippy-margin book</Link>
                    </p>
                    <p>
                        <span className="media">
                            <SocialMediaIcon Icon={LinkedInIcon} color='#007bb6' size="27px"/>
                            <span style={{color: "#007bb6", fontSize: "19px"}}>LinkedIn:</span>
                        </span>
                        <Link to="/">@Sphumelele cat-man Kati</Link>
                        <Link to="/">@slippy-margin book</Link>
                    </p>
                    <p>
                        <span className="media">
                            <SocialMediaIcon Icon={PhoneIcon} color="#2E8B57" size="27px" />
                            <span style={{color: "#2E8B57", fontSize: "19px"}}>Phone / Email:</span>
                        </span>
                        <span>0767566216</span>
                        <span>0786852570</span>
                        <span>(Siphumelelekati @gmail.com)</span>
                    </p>
                </div>
            </div>
            <div>

            </div>
        </div>
        <div className="contact_body">
            <div className="media">
                <SocialMediaIcon Icon={MailIcon} color='#D44638' size="27px"/>
                <h4>Email us!</h4>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>

                <div className="row">
                    <label htmlFor="client_name">Name:</label>
                    <input type="text" id="client_name" name="client_name" required value={emailMessage.client_name} onChange={onChangeInputHandler}/>
                </div>
                <div className="row">
                    <label htmlFor="client_email">Email:</label>
                    <input type="email" id="client_email" name="client_email" required value={emailMessage.client_email} onChange={onChangeInputHandler}/>
                </div>
                <div className="row">
                    <label htmlFor="contact_number">Contact:</label>
                    <input type="number"id="contact_number" name="contact_number" required value={emailMessage.contact_number} onChange={onChangeInputHandler}/>
                </div>
                <div className="row">
                    <label htmlFor="order_book">Would you like to order "The Slippy Margin" book?</label>
                    <div className="row">
                        <select id="order_book" name="order_book" value={emailMessage.order_book} onChange={onChangeInputHandler}>
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>
                {emailMessage.order_book ==="Yes" && 
                    <div className="row">
                        <label htmlFor="delivery_address">Delivery Address:</label>
                        <textarea type="text" id="delivery_address" name="delivery_address" rows="5" 
                        value={emailMessage.delivery_address} onChange={onChangeInputHandler}/>
                    </div>
                }
                <div className="row">
                    <label htmlFor="message">Message:</label>
                    <textarea type="text" id="message" name="message" rows="5" 
                    value={emailMessage.message} onChange={onChangeInputHandler}/>
                </div>
                <div>
                <button type="submit">Send Email</button>
                
                </div>
            </form>
        </div>
    </div>
    </>
  );
}

export default Contact