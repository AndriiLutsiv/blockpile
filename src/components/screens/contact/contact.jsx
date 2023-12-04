import styles from './contact.module.scss';
import { Layout } from '@/components/layout';


const Contact = () => {

    return <Layout title='Contact' description='Some description for seo'>
        <div className={styles.contact}>
            Contact page
        </div>
    </Layout>

}

export default Contact;