'use client';
import styles from './contactForm.module.scss';
import PhoneIcon from '@/public/assets/icons/phone-icon.svg';
import SendIcon from '@/public/assets/icons/send-icon.svg';
import CheckmarkGreenIcon from '@/public/assets/icons/checkmark-green-icon.svg';
import {useState} from 'react';
import Logo from '@/public/assets/logo/WebSquirrel-postman-logo.svg';

interface ContactFormPropsType {
  contactFormType:
    | 'All'
    | 'Strona internetowa'
    | 'Sklep internetowy'
    | 'Grafika';
}

const ContactForm = ({contactFormType}: ContactFormPropsType) => {
  const initialFormDataState = {
    name: {
      value: '',
      error: false,
      errorMessage: 'Za krótkie imię',
    },
    email: {
      value: '',
      error: false,
      errorMessage: 'Popraw adres e-mail',
    },
    contact_topic: {
      value: contactFormType === 'All' ? '' : contactFormType,
      error: false,
      errorMessage: '',
    },
    message: {
      value: '',
      error: false,
      errorMessage: 'Za krótka wiadomość',
    },
  };
  const [formData, setFormData] = useState(initialFormDataState);

  const [status, setStatus] = useState<'waiting' | 'sending' | 'ok'>('waiting');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name as keyof typeof prevData],
        value,
        error: false, // Resetowanie błędu po wpisaniu nowej wartości
        errorMessage: prevData[name as keyof typeof prevData].errorMessage,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let dataCorrect = true;
    if (formData.email.value.trim().replace(/ /g, '').length <= 3) {
      setFormData((prevData) => ({
        ...prevData,
        email: {...prevData.email, error: true},
      }));
      dataCorrect = false;
    }
    if (formData.contact_topic.value === '') {
      setFormData((prevData) => ({
        ...prevData,
        contact_topic: {...prevData.contact_topic, error: true},
      }));
      dataCorrect = false;
    }
    if (formData.name.value.trim().replace(/ /g, '').length < 3) {
      setFormData((prevData) => ({
        ...prevData,
        name: {...prevData.name, error: true},
      }));
      dataCorrect = false;
    }
    if (formData.message.value.trim().replace(/ /g, '').length < 10) {
      setFormData((prevData) => ({
        ...prevData,
        message: {...prevData.message, error: true},
      }));
      dataCorrect = false;
    }

    if (
      !formData.name.error &&
      !formData.email.error &&
      !formData.message.error &&
      !formData.contact_topic.error &&
      dataCorrect
    ) {
      try {
        setStatus('sending');

        const dataToSend = {
          name: formData.name.value,
          email: formData.email.value,
          contact_topic: formData.contact_topic.value,
          message: formData.message.value,
        };

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(dataToSend),
        });

        const result = await response.json();
        if (response.ok) {
          setStatus('ok');
          console.log('Wiadomość wysłana!');
        } else {
          console.log(result.error || 'Błąd wysyłania wiadomości.');
        }
      } catch (error) {
        console.log('Błąd wysyłania wiadomości.', error);
      }

      setTimeout(() => {
        setFormData(initialFormDataState);
        setStatus('waiting');
      }, 3000);
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.formContainer}>
        <h3>Skontaktuj się ze mną</h3>
        <p>
          Formularz poniżej ułatwi Ci szybki kontakt ze mną. Wystarczy, że
          podasz tylko kilka informacji kontaktowych oraz treść zapytania.
          Jeżeli wolisz rozmowę przez telefon zadzwoń pod numer podany poniżej.
        </p>
        <span className={styles.phoneBox}>
          <img
            src={PhoneIcon.src}
            alt="phoneIcon"
            title="phoneIcon"
            width={25}
            height={24}
            loading="eager"
          />
          <p>+48 728 327 596</p>
        </span>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={
              formData.name.error
                ? `${styles.input} ${styles.error}`
                : styles.input
            }
            placeholder="Twoje imię"
            name="name"
            value={formData.name.value}
            required
            onChange={handleChange}
          />
          {formData.name.error && (
            <span className={styles.errorMessage}>
              {formData.name.errorMessage}
            </span>
          )}
          <input
            className={
              formData.email.error
                ? `${styles.input} ${styles.error}`
                : styles.input
            }
            placeholder="E-mail"
            name="email"
            type="email"
            value={formData.email.value}
            required
            onChange={handleChange}
          />
          {formData.email.error && (
            <span className={styles.errorMessage}>
              {formData.email.errorMessage}
            </span>
          )}
          {contactFormType === 'All' && (
            <div className={styles.radioButtonsBox}>
              {['Strona internetowa', 'Sklep internetowy', 'Grafika'].map(
                (topic) => (
                  <span key={topic} className={styles.radioButton}>
                    <input
                      type="radio"
                      id={topic}
                      name="contact_topic"
                      value={topic}
                      checked={formData.contact_topic.value === topic}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor={topic}>{topic}</label>
                  </span>
                )
              )}
            </div>
          )}

          <textarea
            className={
              formData.message.error
                ? `${styles.textArea} ${styles.error}`
                : styles.textArea
            }
            placeholder="Treść Twojego pytania."
            name="message"
            value={formData.message.value}
            required
            onChange={handleChange}
          />
          {formData.message.error && (
            <span className={styles.errorMessage}>
              {formData.message.errorMessage}
            </span>
          )}
          {status === 'waiting' && (
            <button type="submit" className={styles.submitButton}>
              Wyślij pytanie{' '}
              <img
                src={SendIcon.src}
                alt="sendIcon"
                title="sendIcon"
                width={25}
                height={25}
                loading="eager"
              />
            </button>
          )}
          {status === 'sending' && (
            <button type="submit" className={styles.submitButton}>
              Wysyłanie... <span className={styles.loader}></span>
            </button>
          )}
          {status === 'ok' && (
            <button type="submit" className={styles.submitButton}>
              Sukces{' '}
              <img
                src={CheckmarkGreenIcon.src}
                alt="checkmarkIcon"
                title="checkmarkIcon"
                width={25}
                height={25}
                loading="eager"
              />
            </button>
          )}
        </form>
      </div>
      <img
        src={Logo.src}
        className={styles.logo}
        alt="logo"
        title="logo"
        width={466}
        height={527}
        loading="eager"
      />
    </section>
  );
};

export default ContactForm;
