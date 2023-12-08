import React from 'react';
import styles from './section-five.module.scss'
import pict3 from './images/blog1.jpg'
import pict4 from './images/blog2.jpg'
import pict5 from './images/birds.png'
import Link from "next/link";
import { Post } from '../post';
import Image from 'next/image';
import { ContactSection } from '../contact-section';

const SectionFive = ({ randomPosts, contactSectionText, contactSectionButtonText }) => {
  return <div className={styles.sectionFive}>
    <div className={styles.contentTop}>
      <div className={styles.row}>
        <h3 className={styles.title}>Featured Work</h3>
        <Link href={`/jobs?page=1&category=0`} className={styles.link}>View all &gt;</Link>
      </div>
      <div id='case-studies-section' className={styles.postsContainer}>
        {randomPosts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </div>
    <div className={styles.contentBottom}>
      <h3 className={styles.title}>From the blog</h3>
      <div className={styles.blogsContainer}>
        <div className={styles.blogItem}>
          <div className={styles.imageContainer}>
            <Image
              src={pict3}
              alt="Image"
              width={327}
              height={192}
              layout="responsive"
            />
          </div>
          <div className={styles.imageText}>Smart Contract 101</div>
        </div>
        <div className={styles.blogItem}>
          <div className={styles.imageContainer}>
            <Image
              src={pict4}
              alt="Image"
              width={327}
              height={192}
              layout="responsive"
            />
          </div>
          <div className={styles.imageText}>Check out the latest launch</div>
        </div>
        <div className={styles.blogItem}>
          <div className={styles.imageContainer}>
            <Image
              src={pict5}
              alt="Image"
              width={327}
              height={192}
              layout="responsive"
            />
          </div>
          <div className={styles.imageText}>Artist profile: SmokeStacks</div>
        </div>
      </div>
    </div>
    <div className={styles.contactContainer}>
      <ContactSection
        headingText={contactSectionText}
        buttonText={contactSectionButtonText}
      />
    </div>
  </div>
}

export default SectionFive;
