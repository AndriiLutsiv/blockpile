import Image from 'next/image';
import styles from './blog.module.scss';
import Link from "next/link";
import classNames from 'classnames';

const Blog = ({ blog, isBlogsPage }) => {
  return <Link className={classNames(styles.blog, { [styles.isBlogsPage]: isBlogsPage })} href={`/blogs/${blog.id}`}>
    <div className={styles.imageContainer}>
      <Image
        src={blog.featuredImage || ''}
        alt="Image"
        width={327}
        height={192}
        layout="responsive"
      />
    </div>
    <div className={styles.imageText}>{blog.title}</div>
  </Link>
}

export default Blog;
