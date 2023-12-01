import styles from './blog.module.scss';
import Layout from '@/components/layout/Layout';
import lux from './images/lux.png'
import video from './images/video.png'
import casper from './images/casper.png'
import pict1 from './images/work1.jpg'
import pict2 from './images/work2.jpg'
import Link from "next/link";
import { Post } from '../../ui/post/index';
import Image from 'next/image';
import SliderComponent from '@/components/ui/slider/slider';

const Blog = () => {
    return (
        <Layout title='Blog' description='Some description for SEO'>
            <div className={styles.blog}>
                <div className={styles.container}>
                    <div className={styles.dynamicContent}>
                        <span className={styles.blogCategotyName}>NFT</span>
                        <span> </span>
                        <span className={styles.blogTextName}>Project</span>
                        <span> - </span>
                        <span className={styles.blogItemName}>LUX</span>
                    </div>
                    <div>
                        <div className={styles.rowContent}>
                            <div className={styles.contentContainer}>
                                <h2 className={styles.title}>Launching a photography collection</h2>
                                <p className={styles.subTitle}>A collection of 4 NFTs by Daniel Koeth with different distribution mechanisms and rarities. Completed in 2022.</p>
                                <div className={styles.link}>
                                    <span><a href="#">Website</a>   /   </span>
                                    <span><a href="#">Opensea</a>   /   </span>
                                    <span><a href="#">Github</a></span>
                                </div>
                                <div className={styles.technologiesUsed}>
                                    <h4>Scope of work</h4>
                                    <p>Burn/Own to mint contracts</p>
                                    <p>Truffle</p>
                                    <p>React</p>
                                    <p>Web3.js</p>
                                </div>
                            </div>
                            <div className={styles.imgContainer}>
                                <Image src={lux} alt="picture" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.videoContent}>
                        <Image src={video} alt="picture" />
                    </div>


                    <div className={styles.infoConteiner}>
                        <div className={styles.imageContainer}>
                            <Image src={casper} alt="picture" />
                        </div>
                        <div className={styles.textContent}>
                            <h2 className={styles.title}>4 unique items, 1 video, editions all rolled into one contract</h2>
                            <p className={styles.textItem}>As these things good, Daniel was referred to use on Twitter and is a talented SuperRare artist and photographer that needed assistance with how best to deliver the launch to his collector base.</p>
                            <p className={styles.textItem}> Combining different distribution mechanisms and rarities posed a challenge that we willingly accepted.
                            </p>
                            <p className={styles.textItem}>One of the main utilities was a lifetime allowlist for the token owner which is an interesting dynamic. </p>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomContent}>
                    <div className={styles.container}>
                        {/* <SliderComponent></SliderComponent> */}
                        <div className={styles.slideBox}>
                            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.<span>”</span> <br></br>
                                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                            <div className={styles.slideImgContainer}>
                                <div className={styles.slideImg} />
                                <h4 className={styles.imgHeading}>f-1 collective</h4>
                            </div>
                        </div>
                        <div className={styles.borderBottom}></div>
                    </div>

                    <div className={styles.contentTop}>
                        <div className={styles.row}>
                            <h3 className={styles.title}>Featured Work</h3>
                            <Link href={`/jobs`} className={styles.link}>View all &gt;</Link>
                        </div>
                        <div className={styles.postsContainer}>
                            <Post post={{
                                featuredImage: pict1,
                                categoryNames: ['DEFI'],
                                title: 'AirSwap',
                                excerpt: 'Short descriptor here that can be one or two lines to give some insight before the jump.'
                            }} />
                            <Post post={{
                                featuredImage: pict2,
                                categoryNames: ['NFT'],
                                title: 'BirdBlotter',
                                excerpt: 'Short descriptor here that can be one or two lines to give some insight before the jump.'
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Blog;
