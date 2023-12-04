import styles from './post-details.module.scss';
import { Layout } from '@/components/layout';

const PostDetails = ({ postDetailsData }) => {

    return <Layout title='Blog' description='Some description for seo'>
        <div className={styles.postDetails}>
            this is post details
        </div>
    </Layout>

}

export default PostDetails;