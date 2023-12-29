import React from 'react';
import { Blog } from '../../ui/blog';
import styles from './blogs.module.scss';
import { Layout } from '@/components/layout';
import { useRouter } from 'next/router';
import { ContactSection } from '@/components/ui/contact-section';
import ReactPaginate from 'react-paginate';

const createPaginationLink = (page) => ({
    pathname: '/blogs',
    query: {
        page
    },
});

const PaginationLinks = ({ totalPages, currentPage }) => {
    const { push } = useRouter();

    const handlePageClick = (selected) => {
        push(createPaginationLink(selected + 1), undefined, { scroll: false }).then(() => {
            // Check if the device is a tablet or smaller
            if (window.matchMedia("(max-width: 1072px)").matches) {
                // Scroll to the top of the categories section
                const categoriesTop = document.querySelector('.blogs-container')?.offsetTop;
                window.scrollTo({
                    top: categoriesTop || 0,
                    behavior: 'smooth'
                });
            }
        });
    };

    return (
        <ReactPaginate
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

const Blogs = ({ blogs, totalPages, topSectionText, bottomSectionText, bottomSectionButtonText, yoastSEO }) => {
    const { query } = useRouter();
    const currentPage = parseInt(query.page, 10) || 1;

    return (
        <Layout title='Blogs' yoastSEO={yoastSEO}>
            <div className={styles.blogs}>
                <h1 className={styles.heading}>{topSectionText}</h1>
                <div id='blogs-container' className={styles.blogsContainer}>
                    {blogs.map(blog => <Blog key={blog.id} blog={blog} isBlogsPage />)}
                </div>
                <PaginationLinks totalPages={totalPages} currentPage={currentPage} />
                <ContactSection headingText={bottomSectionText} buttonText={bottomSectionButtonText} />
            </div>
        </Layout>
    );
};

export default Blogs;
