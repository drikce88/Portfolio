import React, { useState } from "react";
import emailjs from "emailjs-com";
import github from "../../../public/assets/images/github.webp";
import linkedin from "../../../public/assets/images/linkedin.webp";

export default function ContactForm() {
  const [showModal, setShowModal] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_za0xmpw",
        "template_qxpd139",
        e.target,
        "Y8YvzrZ4AY7T3xpal"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset(); // Efface les champs de saisie
          setShowModal(true); // Affiche la modal
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <footer id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">E-mail :</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message :</label>
          <textarea
            className="message-input"
            id="message"
            name="message"
            required
          ></textarea>

          <button className="send-button" type="submit">
            Envoyer
          </button>
        </form>
        {showModal && (
          <div className="modal">
            <p>Votre message a été envoyé avec succès !</p>
            <button onClick={() => setShowModal(false)}>Fermer</button>
          </div>
        )}
        <div className="socialNetworks">
          <h3>Retrouvez-moi aussi sur :</h3>
          <a
            className="socialNetwork"
            href="https://github.com/drikce88"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Logo Github" />
          </a>
          <a
            className="socialNetwork"
            href="https://www.linkedin.com/in/cedric-rsng-123850291/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Logo Linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
}
