import { Hero, OperationDetails, operationDetailsInput, ContactForm } from "../../components";
import styles from "./Contact.module.css";


export default function Contact() {
  return (
    <section>
      <Hero />
      <ContactForm />
      <div className={styles.operationsWrapper}>
        <OperationDetails entries={operationDetailsInput}/>
      </div>
    </section>
  )
}

