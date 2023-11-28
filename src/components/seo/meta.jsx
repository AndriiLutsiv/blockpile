import Head from 'next/head';
import  parse  from 'html-react-parser';

const getTitle = (title) => `${title} | Default Title`;

const Meta = ({ title, description, yoastSEO, children }) => {

    return <>
        <Head>
            {title && <title>{title}</title>}
            {description &&
                <>
                    <meta name='description' content={description} />
                    <meta name='og:title' content={getTitle(title)} />
                    <meta name='og:description' content={description} />
                </>
            }
            {yoastSEO && parse(yoastSEO)}
        </Head>
        {children}
    </>
}

export default Meta;