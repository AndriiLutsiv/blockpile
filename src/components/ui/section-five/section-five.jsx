import React from 'react';
import styles from './section-five.module.scss'
import Link from "next/link";
import { Post } from '../post';
import { ContactSection } from '../contact-section';
import { Blog } from '../blog';

const SectionFive = ({ randomPosts, contactSectionText, contactSectionButtonText, blogs }) => {
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
        {
          blogs.map(blog => {
            return <Blog key={blog.id} blog={blog} />
          })
        }
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
