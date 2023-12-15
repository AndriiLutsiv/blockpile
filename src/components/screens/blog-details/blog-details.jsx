import styles from './blog-details.module.scss';
import { Layout } from '@/components/layout';
import Link from "next/link";
import { Blog } from '../../ui/blog';
import Image from 'next/image';
import { ContactSection } from '@/components/ui/contact-section';

const hardcodedText = 'Please add content';
const BlogDetails = ({ blogDetailsData, contactSectionText, contactSectionButtonText, randomBlogs }) => {
    return (
        <Layout title='Blog' yoastSEO={blogDetailsData.yoast_head}>
            <div className={styles.blogDetails}>
                <div className={styles.container}>
                    <div className={styles.categoryContainer}>
                        <span className={styles.categoryItem}>Hardcoded_Category</span>
                        &nbsp;
                        <span className={styles.categoryItem}>Project</span>
                        <span> - </span>
                        <span className={styles.categoryItem}>{blogDetailsData.title.rendered || hardcodedText}</span>
                    </div>
                    <div className={styles.topContent}>
                        <div className={styles.contentContainer}>
                            <h2 className={styles.title}> {blogDetailsData?.acf?.topsectionheading || hardcodedText}</h2>
                            <p className={styles.subTitle}>{blogDetailsData?.acf?.topsectiondescription || hardcodedText}</p>
                            <div className={styles.links}>
                                {blogDetailsData?.acf.topsectionlink1 && (
                                    <a href={blogDetailsData.acf.topsectionlink1} target="_blank" rel="noopener noreferrer">Website</a>
                                )}
                                {blogDetailsData?.acf.topsectionlink1 && blogDetailsData?.acf.topsectionlink2 && ' / '}
                                {blogDetailsData?.acf.topsectionlink2 && (
                                    <a href={blogDetailsData.acf.topsectionlink2} target="_blank" rel="noopener noreferrer">Opensea</a>
                                )}
                                {blogDetailsData?.acf.topsectionlink2 && blogDetailsData?.acf.topsectionlink3 && ' / '}
                                {blogDetailsData?.acf.topsectionlink3 && (
                                    <a href={blogDetailsData.acf.topsectionlink4} target="_blank" rel="noopener noreferrer">Github</a>
                                )}
                            </div>
                            <div className={styles.technologiesUsed}>
                                <h4>{blogDetailsData?.acf?.topsectiontechheading || hardcodedText}</h4>
                                <p>{blogDetailsData?.acf?.toptech1 || hardcodedText}</p>
                                <p>{blogDetailsData?.acf?.toptech2 || hardcodedText}</p>
                                <p>{blogDetailsData?.acf?.toptech3 || hardcodedText}</p>
                                <p>{blogDetailsData?.acf?.toptech4 || hardcodedText}</p>
                            </div>
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
                        <div className={styles.slideBox}>
                            <p className={styles.text}>{blogDetailsData?.acf?.middlequotetext || hardcodedText}<span>&nbsp;”</span></p>
                            <div className={styles.slideImgContainer}>
                                <div className={styles.slideImg} />
                                <h4 className={styles.imgHeading}>{blogDetailsData?.acf?.middletestimonialtext}</h4>
                            </div>
                        </div>
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
