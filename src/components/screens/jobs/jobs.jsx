import React from 'react';
import { Post } from '@/components/ui/post';
import styles from './jobs.module.scss';
import Layout from '@/components/layout/Layout';
import Link from "next/link";
import { useRouter } from 'next/router';
import { ContactSection } from '@/components/ui/contact-section';

const CategoryButtons = ({ categories, onCategoryClick }) => (
    <div className={styles.categoryButtons}>
        {Object.entries(categories)
            .filter(([_, name]) => name !== "uncategorized")
            .map(([id, name], index) => (
                <React.Fragment key={id}>
                    {index > 0 && ' / '}
                    <button className={styles.categoryButton} onClick={() => onCategoryClick(id)}>{name}</button>
                </React.Fragment>
            ))}
    </div>
);

const createPaginationLink = (page, category) => ({
    pathname: '/jobs',
    query: {
        page,
        ...(category ? { category } : {})
    },
});

const PaginationLinks = ({ totalPages, category }) => (
    <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
            <Link
                key={index}
                href={createPaginationLink(index + 1, category)}
                className={styles.link}
                isSmall
            >
                {index + 1}
            </Link>
        ))}
    </div>
);

const Jobs = ({ posts, totalPages, categories, category, topSectionText, bottomSectionText, bottomSectionButtonText, yoastSEO }) => {
    const router = useRouter();

    const handleCategoryClick = categoryId => {
        router.push(`/jobs?category=${categoryId}`);
    };

    return (
        <Layout yoastSEO={yoastSEO}>
            <div className={styles.jobs}>
                <h1 className={styles.heading}>{topSectionText}</h1>
                <CategoryButtons categories={categories} onCategoryClick={handleCategoryClick} />
                <div className={styles.postsContainer}>
                    {posts.map(post => <Post key={post.id} isSmall post={post} />)}
                </div>
                <PaginationLinks totalPages={totalPages} category={category} />
                <ContactSection headingText={bottomSectionText} buttonText={bottomSectionButtonText} />
            </div>
        </Layout>
    );
};

export default Jobs;
