import styles from './clients.module.scss';
import { Layout } from '@/components/layout';


const Clients = () => {

    return <Layout title='Clients' description='Some description for seo'>
        <div className={styles.clients}>
            Clients page
        </div>
    </Layout>

}

export default Clients;