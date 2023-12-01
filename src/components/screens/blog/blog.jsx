import styles from './blog.module.scss';
import { Layout } from '@/components/layout';

const Blog = () => {

    return <Layout title='Blog' description='Some description for seo'>
        <div className={styles.blog}>

        </div>
    </Layout>

}

export default Blog;