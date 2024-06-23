import React from 'react';
import Header from './header';

function Contact() {
    return (
        <div>
            <Header />
            <section className="container">
                <div className="contact-section">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <ul>
                            <li>
                                <span>Email:</span>
                                <span>youremail@example.com</span>
                            </li>
                            <li>
                                <span>Phone:</span>
                                <span>+91 9091929394</span>
                            </li>
                            <li>
                                <span>Address:</span>
                                <span>123 Street, Anycity, Chennai-600017</span>
                            </li>
                        </ul>
                    </div>
                    <form className="contact-form">
                        <h2>Send a Message</h2>
                        <div className="name-email">
                            <div className="inputBox">
                                <input type="text" name="name" required placeholder="First Name" />
                            </div>
                            <div className="inputBox">
                                <input type="email" name="email" required placeholder="Email Address" />
                            </div>
                        </div>
                        <div className="inputBox">
                            <textarea name="message" required placeholder="Write your message here..."></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;