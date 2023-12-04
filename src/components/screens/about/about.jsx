import styles from './about.module.scss';
import { Layout } from '@/components/layout';


const About = () => {

    return <Layout title='About' description='Some description for seo'>
        <div className={styles.about}>
            About page
        </div>
    </Layout>

}

export default About;