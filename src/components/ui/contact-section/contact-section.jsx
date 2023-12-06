import './contact-section.module.scss';
import styles from './contact-section.module.scss';

const ContactSection = ({ headingText, buttonText }) => {

    const handleContactClick = () => {
        const email = 'info@blockpile.com';
        const subject = 'Contact Inquiry';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.open(mailtoLink, '_blank');
    };

    return (
        <div className={styles.contactSection}>
            <h3 className={styles.heading}>{headingText}</h3>
            <button onClick={handleContactClick} className={styles.button}>{buttonText}</button>
        </div>
    );
};

export default ContactSection;