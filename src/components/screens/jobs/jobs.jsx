import styles from './jobs.module.scss';
import Layout from '@/components/layout/Layout';

const Jobs = () => {

    return <Layout title='Job' description='Some description for seo'>
        <div className={styles.jobs}>Jobs</div>
    </Layout>

}

export default Jobs;