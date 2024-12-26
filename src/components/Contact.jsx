import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../components/Contact.css'
// import { useNavigate } from "react-router-dom";



function Contact({NotifySucces,cartItems}) {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const telegramBotToken = '7166400728:AAENydLWNB8DEtbhVjT9X3QJj3NOxtNnNM4';
    const chatId = '5724981036';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        NotifySucces();
        const message = `
          Delizi Contact Form Submission:
          - First Name: ${formData.firstName}
          - Last Name: ${formData.lastName}
          - Email: ${formData.email}
          - Subject: ${formData.subject}
          - Message: ${formData.message}
        `;

        fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.ok) {
                    console.log("Message sent to Telegram bot");

                    // Reset the form 
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                } else {
                    console.error("Error sending message to Telegram bot:", data);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };


    return (
        <div className='wrap-contact'>
            <Header cartItems={cartItems}/>
            <div className="contact">
                <h1>Contact us</h1>
                <p>We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-input-group">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="contact-input"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="contact-input"
                        />
                    </div>
                    <div className="contact-input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="contact-input"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="contact-input"
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="contact-textarea"
                    ></textarea>
                    <button type="submit" className="contact-submit-btn">Submit</button>
                </form>

            </div>

            <div className="contact-map">
                <iframe className='contact-map-iframe' title='contact' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386311.06970484206!2d71.9763512!3d40.84871115000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bca0f4b7ee00d7%3A0xdfc5299b5374dd69!2z0JHQsNC70YvQutGH0LjQvdGB0LrQuNC5INGA0LDQudC-0L0sINCQ0L3QtNC40LbQsNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1729076953615!5m2!1sru!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Footer />
        </div>
    )
}

export default Contact