import styles from "./Contact.module.css";
import {Form} from "../../../components/form/Form";

export function Contact() {
    return (
        <section className="contact">
            <Form/>
            <iframe
                className={styles.contactIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1656.3078818946906!2d-78.5153739367841!3d-9.119542647810022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab85b689424563%3A0x699ba0e0500a7e69!2sCentro%20de%20C%C3%B3mputo%20UNS!5e0!3m2!1ses-419!2spe!4v1697165213187!5m2!1ses-419!2spe"
                loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </section>
    );
}