import styles from './home.module.scss';
import Layout from '@/components/layout/Layout';

const Home = () => {

    return <Layout title='Home' description='Some description for seo'>
        <div className={styles.home}>Home</div>
    </Layout>

}

export default Home;