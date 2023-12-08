import styles from './post-details.module.scss';
import { Layout } from '@/components/layout';
import lux from './images/lux.png'
import video from './images/video.png'
import casper from './images/casper.png'
import pict1 from './images/work1.jpg'
import pict2 from './images/work2.jpg'
import Link from "next/link";
import { Post } from '../../ui/post/index';
import Image from 'next/image';
import { ContactSection } from '@/components/ui/contact-section';

const hardcodedText = 'Please add content';
const PostDetails = ({ postDetailsData }) => {
    return (
        <Layout title='Blog' description='Some description for SEO'>
            <div className={styles.postDetails}>
                <div className={styles.container}>
                    <div className={styles.categoryContainer}>
                        <span className={styles.categoryItem}>NFT</span>
                        &nbsp;
                        <span className={styles.categoryItem}>Project</span>
                        <span> - </span>
                        <span className={styles.categoryItem}>LUX</span>
                    </div>

                    <div className={styles.topContent}>
                        <div className={styles.contentContainer}>
                            <h2 className={styles.title}> {postDetailsData?.acf?.topsectionheading || hardcodedText}</h2>
                            <p className={styles.subTitle}>{postDetailsData?.acf?.topsectiondescription || hardcodedText}</p>
                            <div className={styles.link}>
                                {postDetailsData?.acf?.topsectiontags || hardcodedText}
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
                            <Image src={lux} alt="picture" />
                        </div>
                    </div>
                    <div className={styles.videoContent}>
                        <Image src={video} alt="picture" />
                    </div>

                    <div className={styles.middleContent}>
                        <div className={styles.imageContainer}>
                            <Image src={casper} alt="picture" />
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
                                <Link href={`/jobs`} className={styles.link}>View all &gt;</Link>
                            </div>
                            <div className={styles.postsContainer}>
                                <Post post={{
                                    id: 48,
                                    featuredImage: pict1,
                                    categoryNames: ['DEFI'],
                                    title: 'AirSwap',
                                    excerpt: 'Short descriptor here that can be one or two lines to give some insight before the jump.'
                                }} />
                                <Post post={{
                                    id: 48,
                                    featuredImage: pict2,
                                    categoryNames: ['NFT'],
                                    title: 'BirdBlotter',
                                    excerpt: 'Short descriptor here that can be one or two lines to give some insight before the jump.'
                                }} />
                            </div>
                        </div>
                        <ContactSection
                            headingText="Do you have a Web3 project in mind? Let’s discuss how we can help."
                            buttonText="Contact"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PostDetails;
