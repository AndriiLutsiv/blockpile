import Image from 'next/image';
import classNames from 'classnames';
import styles from './post.module.scss';
import Link from "next/link";

const Post = ({ isSmall, post }) => {

  return <div className={styles.post}>
    <div className={classNames(styles.imgContainer, {[styles.smaller]: isSmall})}>
      <div className={styles.imageWrapper}>
        <Image
          src={post.featuredImage}
          alt="Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    <div className={styles.category}>{post.categoryNames[0]}</div>
    <Link href={`/posts/${post.id}`} className={classNames(styles.title, {[styles.smaller]: isSmall})}>{post.title}</Link>
    <p className={classNames(styles.text, {[styles.smaller]: isSmall})}>{post.excerpt}</p>
  </div>
}

export default Post;
