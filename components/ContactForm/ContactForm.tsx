'use client';
import styles from './contactForm.module.scss';
import Logo from '@/public/assets/logo/WebSquirrel-postman-logo.svg';
import PhoneIcon from '@/public/assets/icons/phone-icon.svg';
import SendIcon from '@/public/assets/icons/send-icon.svg';

const ContactForm = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.formContainer}>
        <h3>Zapytaj się o projekt</h3>
        <p>
          W formularzu poniżej podaj podstawowy opis projektu do zrealizowania
          oraz wybierz kategorię zlecenia. Oczywiście jeżeli masz czas
          zapraszamy do kontaktu telefonicznego zawsze chętnie pogadamy.
        </p>
        <span className={styles.phoneBox}>
          <img src={PhoneIcon.src} />
          <p>+48 728 327 596</p>
        </span>
        <form className={styles.form}>
          <input className={styles.input} placeholder="Twoje imię" />
          <input className={styles.input} placeholder="E-mail" />
          <div className={styles.radioButtonsBox}>
            <span className={styles.radioButton}>
              <input
                type="radio"
                id="website"
                name="contact_topic"
                value="Strona internetowa"
              />
              <label htmlFor="website">Strona internetowa</label>
            </span>
            <span className={styles.radioButton}>
              <input
                type="radio"
                id="shop"
                name="contact_topic"
                value="Sklep internetowy"
              />
              <label htmlFor="shop">Sklep internetowy</label>
            </span>
            <span className={styles.radioButton}>
              <input
                type="radio"
                id="graphic"
                name="contact_topic"
                value="Grafika"
              />
              <label htmlFor="graphic">Grafika</label>
            </span>
          </div>
          <textarea
            className={styles.textArea}
            placeholder="Treść Twojego pytania."
          />
          <button type="submit" className={styles.submitButton}>
            Wyślij pytanie <img src={SendIcon.src} />
          </button>
        </form>
      </div>
      <img src={Logo.src} className={styles.logo} />
    </section>
  );
};

export default ContactForm;
