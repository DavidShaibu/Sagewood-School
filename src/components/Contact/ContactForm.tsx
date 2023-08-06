import { ChangeEvent, useState } from "react";
import Button from "../Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialFormState);

  const handleAnswerChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    event?.preventDefault();
    console.log(formState);
    setFormState(initialFormState)
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContactUs}>
      <h2 className={styles.getInTouch}>Get in Touch!</h2>
      <div className={styles.content}>
        <div className={styles.inputDiv}>
          <label className={styles.labelDiv} htmlFor="name">
            <span className={styles.labelText}>Your Name</span>
            <span className={styles.asterisk}>*</span>
          </label>
          <input
            className={styles.inputElement}
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleAnswerChange}
            required
          />
          <label className={styles.labelDiv} htmlFor="email">
            <span className={styles.labelText}>Your Email</span>
            <span className={styles.asterisk}>*</span>
          </label>
          <input
            className={styles.inputElement}
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleAnswerChange}
            required
          />
          <label className={styles.labelDiv} htmlFor="phone">
            <span className={styles.labelText}>Your Phone</span>
            <span className={styles.asterisk}>*</span>
          </label>
          <input
            className={styles.inputElement}
            type="phone"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleAnswerChange}
            required
          />
        </div>
        <div className={styles.textAreaDiv}>
          <label className={styles.labelDiv} htmlFor="message">
            <span className={styles.labelText}>Message</span>
            <span className={styles.asterisk}>*</span>
          </label>
          <textarea
            className={styles.textAreaElement}
            id="message"
            name="message"
            value={formState.message}
            onChange={handleAnswerChange}
            rows={12}
            required
          >
          </textarea>
        </div>
      </div>
      {isSubmitted && <p className={styles.submittedText}>Your message has been successfully sent</p>}
      <div className={styles.buttonDiv}>
        <button className={styles.submitButton} type="submit">Send Message</button>  
      </div>
    </form>
  );
};

export default ContactForm;
