import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_za0xmpw', 'template_qxpd139', e.target, 'Y8YvzrZ4AY7T3xpal')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section id='contact' className='contact-section'>
            <h2>Contact</h2>
        <form className='contact-form' onSubmit={sendEmail}>
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">E-mail :</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Envoyer</button>
        </form>
        </section>
    );
}
