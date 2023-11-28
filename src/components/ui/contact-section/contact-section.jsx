import './contact-section.module.scss';
import styles from './contact-section.module.scss';

const ContactSection = ({headingText, buttonText}) => {
    return (
        <div className={styles.contactSection}>
            <h3 className={styles.heading}>{headingText}</h3>
            <button className={styles.button}>{buttonText}</button>
        </div>
    );
};

export default ContactSection;