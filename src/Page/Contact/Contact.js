import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_czefci4', 'template_m44njgf', e.target, 'QLG-H1dwpKvG_rn4q')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <div className="contact__container" id="contact">
                <h2 className="contact--title">Napisz do mnie</h2>
            <div className="contact--content">
                <form className="contact--form" onSubmit={sendEmail}>
                    <div>
                        <input type="text" autoComplete="off" placeholder="Imie i Nazwisko / Firma" name="name" required/>
                    </div>
                    <div>
                        <input type="email" autoComplete="off" placeholder="Adres Email do kontaktu" name="email" required/>
                    </div>
                    <div>
                        <textarea placeholder="Treść wiadomości" name="message" required></textarea>
                    </div>
                    <input className="form--btn" type="submit" value="Wyślij" />
                </form>
                <div className="contact--phone">
                    <i class="fas fa-phone-alt"></i>
                    <span>511-685-335</span>
                </div>
            </div>
        </div>
    )
}

export default Contact;