import styles from './blog-details.module.scss';
import { Layout } from '@/components/layout';
import Link from "next/link";
import { Blog } from '../../ui/blog';
import Image from 'next/image';
import { ContactSection } from '@/components/ui/contact-section';

const hardcodedText = 'Please add content';
const BlogDetails = ({ blogDetailsData, contactSectionText, contactSectionButtonText, randomBlogs }) => {
    return (
        <Layout title={`blockpile - ${blogDetailsData.title.rendered}`} yoastSEO={blogDetailsData.yoast_head}>
            <div className={styles.blogDetails}>
                <div className={styles.container}>
                    <div className={styles.topContent}>
                        <div className={styles.contentContainer}>
                            <h2 className={styles.title}> {blogDetailsData?.acf?.topsectionheading || hardcodedText}</h2>
                            <p className={styles.subTitle}>{blogDetailsData?.acf?.topsectiondescription || hardcodedText}</p>
                        </div>
                        <div className={styles.imgContainer}>
                            <Image width={800} height={560} src={blogDetailsData?.topImageData.source_url || ''} alt="picture" layout="responsive" />
                        </div>
                    </div>
                    <div className={styles.videoContent}>
                        <Image width={1360} height={900} src={blogDetailsData?.middleImageCoverData.source_url || ''} alt="picture" layout="responsive" />
                    </div>
                    <div className={styles.middleContent}>
                        <div className={styles.imageContainer}>
                            <Image width={720} height={500} src={blogDetailsData?.middleTextImageData.source_url || ''} alt="picture" />
                        </div>
                        <div className={styles.textContent}>
                            <h2 className={styles.title}>{blogDetailsData?.acf?.middletexttitle || hardcodedText}</h2>
                            {
                                (blogDetailsData?.acf?.middletextdescription || hardcodedText).split('. ').map((sentence, index) => (
                                    <p key={index} className={styles.textItem}>
                                        {sentence}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles.bottomContent}>
                        <div className={styles.details}>
                            <div className={styles.row}>
                                <h3 className={styles.title}>Featured Work</h3>
                                <Link href={`/`}>View all &gt;</Link>
                            </div>
                            <div className={styles.blogsContainer}>
                                {randomBlogs.map(blog => <Blog key={blog.id} blog={blog} />)}
                            </div>
                        </div>
                        <ContactSection headingText={contactSectionText} buttonText={contactSectionButtonText} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BlogDetails;
