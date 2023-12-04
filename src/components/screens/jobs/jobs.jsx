import React, { useEffect } from 'react';
import { Post } from '@/components/ui/post';
import styles from './jobs.module.scss';
import { Layout } from '@/components/layout';
import { useRouter } from 'next/router';
import { ContactSection } from '@/components/ui/contact-section';
import classNames from 'classnames';
import ReactPaginate from 'react-paginate';


const CategoryButtons = ({ categories, onCategoryClick }) => {
    const { query } = useRouter();
    const currentCategory = query.category;

    return (
        <div className={styles.categoryButtons}>
            {Object.entries(categories)
                .filter(([_, name]) => name !== "uncategorized")
                .map(([id, name], index) => (
                    <React.Fragment key={id}>
                        {index > 0 && ' / '}
                        <button
                            className={classNames(styles.categoryButton, { [styles.active]: currentCategory === id })}
                            onClick={() => onCategoryClick(id)}
                        >
                            {name}
                        </button>
                    </React.Fragment>
                ))}
        </div>
    )
};

const createPaginationLink = (page, category) => ({
    pathname: '/jobs',
    query: {
        page,
        ...{ category }
    },
});

const PaginationLinks = ({ totalPages, category, currentPage }) => {
    const { push } = useRouter();

    const handlePageClick = (selected) => {

        push(createPaginationLink(selected + 1, category), undefined, { scroll: false }).then(() => {
            // Check if the device is a tablet or smaller
            if (window.matchMedia("(max-width: 1072px)").matches) {
                // Scroll to the top of the categories section
                const categoriesTop = document.querySelector('.categoryButtons')?.offsetTop;
                window.scrollTo({
                    top: categoriesTop || 0,
                    behavior: 'smooth'
                });
            }
        });
    };

    return (
        <ReactPaginate
            key={category}
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={({ selected }) => handlePageClick(selected)}
            containerClassName={styles.pagination}
            pageClassName={styles.pageItem}
            pageLinkClassName={styles.pageLink}
            activeClassName={styles.active}
            previousClassName={styles.pageItem}
            nextClassName={styles.pageItem}
            breakClassName={styles.pageItem}
            initialPage={currentPage - 1}
            disableInitialCallback={true}
            hrefBuilder={() => 'javascript:void(0);'} // Override default href
        />
    );
};


const Jobs = ({ posts, totalPages, categories, category, topSectionText, bottomSectionText, bottomSectionButtonText, yoastSEO }) => {
    const { push, query } = useRouter();
    const currentPage = parseInt(query.page, 10) || 1;

    const updatedQuery = { ...query, page: 1 };

    const handleCategoryClick = categoryId => {
        push({
            pathname: '/jobs',
            query: {
                ...updatedQuery,
                category: categoryId,
            },
        }, undefined, { scroll: false });
    };


    return (
        <Layout yoastSEO={yoastSEO}>
            <div className={styles.jobs}>
                <h1 className={styles.heading}>{topSectionText}</h1>
                <CategoryButtons categories={categories} onCategoryClick={handleCategoryClick} />
                <div className={styles.postsContainer}>
                    {posts.map(post => <Post key={post.id} isSmall post={post} />)}
                </div>
                <PaginationLinks totalPages={totalPages} category={category} currentPage={currentPage} />
                <ContactSection headingText={bottomSectionText} buttonText={bottomSectionButtonText} />
            </div>
        </Layout>
    );
};

export default Jobs;
