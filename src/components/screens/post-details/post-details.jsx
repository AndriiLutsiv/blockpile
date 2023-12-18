import styles from './post-details.module.scss';
import { Layout } from '@/components/layout';
import Link from "next/link";
import { Post } from '../../ui/post/index';
import Image from 'next/image';
import { ContactSection } from '@/components/ui/contact-section';

const hardcodedText = 'Please add content';
const PostDetails = ({ postDetailsData, contactSectionText, contactSectionButtonText, randomPosts }) => {

    return (
        <Layout title='Case' yoastSEO={postDetailsData.yoast_head}>
            <div className={styles.postDetails}>
                <div className={styles.container}>
                    <div className={styles.categoryContainer}>
                        <span className={styles.categoryItem}>{postDetailsData.categoryName || hardcodedText}</span>
                        &nbsp;
                        <span className={styles.categoryItem}>Project</span>
                        <span> - </span>
                        <span className={styles.categoryItem}>{postDetailsData.title.rendered || hardcodedText}</span>
                    </div>
                    <div className={styles.topContent}>
                        <div className={styles.contentContainer}>
                            <h2 className={styles.title}> {postDetailsData?.acf?.topsectionheading || hardcodedText}</h2>
                            <p className={styles.subTitle}>{postDetailsData?.acf?.topsectiondescription || hardcodedText}</p>
                            <div className={styles.links}>
                                {postDetailsData?.acf.topsectionlink1 && (
                                    <a href={postDetailsData.acf.topsectionlink1} target="_blank" rel="noopener noreferrer">Website</a>
                                )}
                                {postDetailsData?.acf.topsectionlink1 && postDetailsData?.acf.topsectionlink2 && ' / '}
                                {postDetailsData?.acf.topsectionlink2 && (
                                    <a href={postDetailsData.acf.topsectionlink2} target="_blank" rel="noopener noreferrer">Opensea</a>
                                )}
                                {postDetailsData?.acf.topsectionlink2 && postDetailsData?.acf.topsectionlink3 && ' / '}
                                {postDetailsData?.acf.topsectionlink3 && (
                                    <a href={postDetailsData.acf.topsectionlink3} target="_blank" rel="noopener noreferrer">Github</a>
                                )}
                            </div>
                            <div className={styles.technologiesUsed}>
                                <h4>{postDetailsData?.acf?.topsectiontechheading || hardcodedText}</h4>
                                <p>{postDetailsData?.acf?.toptech1 || hardcodedText}</p>
                                <p>{postDetailsData?.acf?.toptech2 || hardcodedText}</p>
                                <p>{postDetailsData?.acf?.toptech3 || hardcodedText}</p>
                                <p>{postDetailsData?.acf?.toptech4 || hardcodedText}</p>
                            </div>
                        </div>
                        <div className={styles.imgContainer}>
                            <Image width={800} height={560} src={postDetailsData?.topImageData.source_url || ''} alt="picture" layout="responsive" />
                        </div>
                    </div>
                    <div className={styles.videoContent}>
                        <Image width={1360} height={900} src={postDetailsData?.middleImageCoverData.source_url || ''} alt="picture" layout="responsive" />
                    </div>
                    <div className={styles.middleContent}>
                        <div className={styles.imageContainer}>
                            <Image width={720} height={500} src={postDetailsData?.middleTextImageData.source_url || ''} alt="picture" />
                        </div>
                        <div className={styles.textContent}>
                            <h2 className={styles.title}>{postDetailsData?.acf?.middletexttitle || hardcodedText}</h2>
                            {
                                (postDetailsData?.acf?.middletextdescription || hardcodedText).split('. ').map((sentence, index) => (
                                    <p key={index} className={styles.textItem}>
                                        {sentence}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles.bottomContent}>
                        <div className={styles.slideBox}>
                            <p className={styles.text}>{postDetailsData?.acf?.middlequotetext || hardcodedText}<span>&nbsp;”</span></p>
                            <div className={styles.slideImgContainer}>
                                <div className={styles.slideImg} />
                                <h4 className={styles.imgHeading}>{postDetailsData?.acf?.middletestimonialtext}</h4>
                            </div>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.row}>
                                <h3 className={styles.title}>Featured Work</h3>
                                <Link href={`/jobs?page=1&category=0`}>View all &gt;</Link>
                            </div>
                            <div className={styles.postsContainer}>
                                {randomPosts.map(post => <Post key={post.id} post={post} />)}
                            </div>
                        </div>
                        <ContactSection headingText={contactSectionText} buttonText={contactSectionButtonText} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PostDetails;
