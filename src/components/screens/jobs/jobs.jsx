import { Post } from '@/components/ui/post';
import styles from './jobs.module.scss';
import Layout from '@/components/layout/Layout';
import Link from "next/link";

const Jobs = ({ posts, totalPages, categories }) => {
    console.log('categories', categories);
    return (
        <Layout title='Jobs' description='Some description for SEO'>
            <div className={styles.jobs}>
                <div className={styles.container}>
                    {posts.map((post) => (
                        <Post key={post.id} isSmall post={post} />
                    ))}
                </div>
                <div className={styles.pagination}>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Link href={`/jobs?page=${index + 1}`} className={styles.link} isSmall>{index + 1}</Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Jobs;
