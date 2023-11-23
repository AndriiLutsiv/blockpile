import Image from 'next/image';
import classNames from 'classnames';
import styles from './post.module.scss';

const Post = ({ isSmall, post }) => {
  return <div className={styles.post}>
    <div className={styles.imgContainer}>
      <Image
        src={post.img}
        alt="Image"
        width={615}
        height={437}
        layout="responsive"
      />
    </div>
    <div className={styles.category}>{post.category}</div>
    <h2 className={styles.title}>{post.title}</h2>
    <p className={styles.text}>{post.text}</p>
  </div>
}

export default Post;
