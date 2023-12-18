import Image from 'next/image';
import styles from './blog.module.scss';
import Link from "next/link";

const Blog = ({blog}) => {
  return <Link className={styles.blog} href={`/blogs/${blog.id}`}>
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
